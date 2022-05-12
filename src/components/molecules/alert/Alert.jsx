import { AlertMessageWrapper, AlertMessageText } from "./alert.styles";

export const Alert = ({ state, message  }) => {
  return (
    <AlertMessageWrapper state={state} role="alert">
      <AlertMessageText state={state}>{message}</AlertMessageText>
    </AlertMessageWrapper>
  );
};
