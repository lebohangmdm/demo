import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, CircleCheck } from "lucide-react";
import { useEffect, useState } from "react";

type StatusAlertProps = {
  success: boolean;
  message: string;
};

const AlertMessage: React.FC<StatusAlertProps> = ({ success, message }) => {
  const textStyles = success ? "text-green-600" : "text-red-500";
  const borderStyle = success ? "border-green-500" : "border-red-500";

  console.log("message: ", message);

  const [showMessage, setShowMessage] = useState<boolean>(false);
  useEffect(() => {
    if (message) {
      setShowMessage(true);

      if (success) {
        const timer = setTimeout(() => setShowMessage(false), 5000);
        return () => clearTimeout(timer);
      }
    }
  }, [message, success]);

  if (!message || !showMessage) return null;

  return (
    <Alert
      className={borderStyle}
      variant={success ? "default" : "destructive"}
    >
      {success ? (
        <CircleCheck color="green" className="h-5 w-5" />
      ) : (
        <AlertCircle color="red" className="h-5 w-5" />
      )}
      <AlertTitle className={textStyles}>
        {success ? "Success" : "Error"}
      </AlertTitle>
      <AlertDescription className={textStyles}>{message}</AlertDescription>
    </Alert>
  );
};

export default AlertMessage;
