import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import parseContentData from '../../../utils/parsers/parseContentData';
import FloatingButton from '../../components/FloatingButton';
import MessageCard from '../../components/card/MessageCard';
import ContentInputModal from '../../components/modal/ContentInputModal';
import styles from './Messages.style';

const EmptyComponent = () => (
  <View style={styles.centeredSingleView}>
    <Text style={{textAlign: 'center'}}>Yok mu derdi olan, göndersin!</Text>
  </View>
);

const LoadingComponent = () => (
  <View style={styles.centeredSingleView}>
    <Text style={{textAlign: 'center'}}>Dertler yükleniyor</Text>
    <ActivityIndicator size="large" />
  </View>
);

export interface MessageSchema {
  id: string;
  date: string;
  text: string;
  username: string;
  dislike: number;
}

const Messages = () => {
  const [inputModalVisible, setInputModalVisible] =
    React.useState<boolean>(false);
  const [messageList, setMessageList] = React.useState<MessageSchema[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    setLoading(true);
    const listenDB = () => {
      const reference = database().ref('/messages');
      reference.on('value', snapshot => {
        const contentData = snapshot.val();
        const parsedData = parseContentData(contentData);
        setMessageList(parsedData);
        setLoading(false);
      });
    };

    listenDB();
  }, []);

  const handleSendContent = (content: string) => {
    setInputModalVisible(false);
    sendContent(content);
  };

  const sendContent = (content: string) => {
    const userMail = auth().currentUser?.email;
    const contentObject = {
      text: content,
      username: userMail?.split('@')[0],
      date: new Date().toISOString(),
      dislike: 0,
    };

    database().ref('/messages').push(contentObject);
    console.log(contentObject);
  };

  const handleBanane = (item: MessageSchema) =>
    database()
      .ref(`/messages/${item.id}/`)
      .update({dislike: item.dislike + 1});

  const renderContenItem = ({item}: {item: MessageSchema}) => (
    <MessageCard message={item} onBanane={() => handleBanane(item)} />
  );

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <LoadingComponent />
      ) : (
        <>
          {messageList.length === 0 ? (
            <EmptyComponent />
          ) : (
            <FlatList
              data={messageList}
              renderItem={renderContenItem}
              keyExtractor={item => item.id.toString()}
            />
          )}
          <FloatingButton
            iconName="plus"
            onPress={() => setInputModalVisible(true)}
          />
          <ContentInputModal
            isVisible={inputModalVisible}
            onClose={() => setInputModalVisible(false)}
            onSend={handleSendContent}
          />
        </>
      )}
    </SafeAreaView>
  );
};

export default Messages;
