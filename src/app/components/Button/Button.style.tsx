import {StyleSheet} from 'react-native';
import Colors from '../../../styles/Color';

export enum e_ButtonStyles {
  fill = 'fill',
  outline = 'outline',
  inCard = 'inCard',
}

export type t_StylePref = e_ButtonStyles;

// default style is fill
const base_style = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    margin: 10,
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: Colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: Colors.tertiary_container,
    marginHorizontal: 8,
  },
  container_disabled: {
    backgroundColor: Colors.tertiary,
    borderColor: Colors.tertiary,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 17,
    color: Colors.text_bright,
  },
  title_disabled: {
    color: Colors.surface,
  },
});

export default {
  // default style is fill
  fill: StyleSheet.create({
    ...base_style,
  }),
  outline: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      backgroundColor: Colors.container,
      borderColor: Colors.secondary,
    },
    icon: {
      ...base_style.icon,
      color: Colors.primary,
    },
    container_disabled: {
      ...base_style.container_disabled,
      backgroundColor: Colors.border,
    },
    title: {
      ...base_style.title,
      color: Colors.secondary,
    },
    title_disabled: {
      ...base_style.title_disabled,
      color: Colors.border,
    },
  }),
  inCard: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      paddingVertical: 4,
      paddingHorizontal: 10,
      margin: 2,
      backgroundColor: Colors.container,
      borderRadius: 20,
    },
    icon: {
      ...base_style.icon,
      color: Colors.primary,
    },
    container_disabled: {
      ...base_style.container_disabled,
      backgroundColor: Colors.border,
    },
    title: {
      ...base_style.title,
      fontSize: 14,
      color: Colors.primary,
    },
    title_disabled: {
      ...base_style.title_disabled,
      color: Colors.border,
    },
  }),
};
