import {StyleSheet} from 'react-native';
import Colors from '../../../../styles/Color';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    marginBottom: 16,
    padding: 8,
    borderRadius: 10,
  },
  inner_container: {
    flexDirection: 'row',
  },
  user: {
    flex: 1,
    fontWeight: 'bold',
    color: Colors.text_bright,
  },
  date: {
    fontStyle: 'italic',
    color: Colors.surface,
  },
  text: {
    marginTop: 10,
    color: Colors.text_bright,
    fontSize: 16,
  },
  dislike_container: {
    alignItems: 'flex-end',
  },
  dislike_button_container: {
    backgroundColor: Colors.container,
    borderWidth: 1.5,
    borderColor: Colors.primary,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 10,
    margin: 2,
    borderRadius: 20,
  },
  dislike_count_container: {
    marginRight: 4,
    paddingHorizontal: 6,
    borderRadius: 50,
    backgroundColor: Colors.primary,
  },
  dislike_count: {
    fontSize: 14,
    color: Colors.text_bright,
  },
  dislike_button_icon: {
    color: Colors.tertiary_container,
    marginHorizontal: 8,
  },
  dislike_button_container_disabled: {
    backgroundColor: Colors.tertiary,
    borderColor: Colors.tertiary,
  },
  dislike_button_title: {
    fontWeight: 'bold',
    fontSize: 14,
    color: Colors.primary,
  },
  dislike_button_title_disabled: {
    color: Colors.surface,
  },
});
