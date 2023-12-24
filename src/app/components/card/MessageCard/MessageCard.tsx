import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {formattedDate} from '../../../../api/date-fns-tz/dateFormatter';
import {MessageSchema} from '../../../pages/Messages/Messages';
import styles from './MessageCard.style';

type MessageCardProps = {
  message: MessageSchema;
  onBanane: any;
};

const MessageCard = ({message, onBanane}: MessageCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.inner_container}>
        <Text style={styles.user}>{message.username}</Text>
        <Text style={styles.date}>{formattedDate(message)}</Text>
      </View>
      <Text style={styles.text}>{message.text}</Text>
      <View style={styles.dislike_container}>
        <TouchableOpacity
          style={[styles.dislike_button_container]}
          onPress={onBanane}>
          {message.dislike > 0 && (
            <View style={styles.dislike_count_container}>
              <Text style={styles.dislike_count}>{message.dislike}</Text>
            </View>
          )}
          <Text style={[styles.dislike_button_title]}>Bana Ne?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MessageCard;
