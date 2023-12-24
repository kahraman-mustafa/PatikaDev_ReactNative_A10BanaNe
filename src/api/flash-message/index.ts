import * as React from 'react';
import {
  Animated,
  ImageProps,
  ImageStyle,
  StyleProp,
  TextProps,
  TextStyle,
  TranslateYTransform,
  ViewStyle,
} from 'react-native';

type Position =
  | 'top'
  | 'bottom'
  | 'center'
  | {top?: number; left?: number; bottom?: number; right?: number};
type MessageType =
  | 'none'
  | 'default'
  | 'info'
  | 'success'
  | 'danger'
  | 'warning';

type Icon =
  | MessageType
  | 'auto'
  | {
      icon: MessageType | 'auto';
      position: 'left' | 'right';
      props: {};
    };

type Transition =
  | {
      transform: TranslateYTransform[];
      opacity: number;
    }
  | {opacity: number}
  | {};

interface Message {
  message: string;
  description?: string;
  type?: string;
  backgroundColor?: string;
  color?: string;
  duration?: number;
}

interface MessageComponentProps {
  position?: Position;
  floating?: boolean;
  message: Message;
  hideStatusBar?: boolean;
  icon: React.ReactElement | Icon;
  style: StyleProp<ViewStyle>;
  textStyle: StyleProp<TextStyle>;
  titleStyle: StyleProp<TextStyle>;
  renderFlashMessageIcon?(
    icon: React.ReactElement | Icon,
    style: StyleProp<ImageStyle>,
    iconProps: Partial<ImageProps>,
  ): React.ReactElement<{}> | null;
  renderBeforeContent?(message: MessageOptions): React.ReactElement<{}> | null;
  renderCustomContent?(message: MessageOptions): React.ReactElement<{}> | null;
  renderAfterContent?(message: MessageOptions): React.ReactElement<{}> | null;
}

interface MessageOptions {
  animated?: boolean;
  animationDuration?: number;
  backgroundColor?: string;
  autoHide?: boolean;
  color?: string;
  description?: string;
  duration?: number;
  floating?: boolean;
  hideOnPress?: boolean;
  hideStatusBar?: boolean;
  statusBarHeight?: number;
  icon?: React.ReactElement | React.FC | Icon;
  iconProps?: Partial<ImageProps>;
  message: string;
  position?: Position;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  titleStyle?: StyleProp<TextStyle>;
  textProps?: TextProps;
  titleProps?: TextProps;
  type?: MessageType;
  onHide?(): void;
  onPress?(): void;
  onLongPress?(): void;
  renderFlashMessageIcon?(
    icon: React.ReactElement | Icon,
    style: StyleProp<ImageStyle>,
    iconProps: Partial<ImageProps>,
  ): React.ReactElement<{}> | null;
  renderBeforeContent?(message: MessageOptions): React.ReactElement<{}> | null;
  renderCustomContent?(message: MessageOptions): React.ReactElement<{}> | null;
  renderAfterContent?(message: MessageOptions): React.ReactElement<{}> | null;
}

interface FlashMessageProps extends Partial<MessageOptions> {
  accessible?: boolean;
  accessibilityLabel?: string;
  testID?: string;
  canRegisterAsDefault?: boolean;
  style?: StyleProp<ViewStyle>;
  MessageComponent?:
    | React.SFC<MessageComponentProps>
    | React.ReactElement<MessageComponentProps>;
  transitionConfig?(animValue: Animated.Value, position: Position): Transition;
}

interface ColorTheme {
  success?: string;
  info?: string;
  warning?: string;
  danger?: string;
}
