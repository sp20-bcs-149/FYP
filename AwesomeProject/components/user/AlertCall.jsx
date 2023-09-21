import React, { useState } from 'react';
import { View, Button } from 'react-native';
import CustomAlert from './Alert';

const MyComponentAlert = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleConfirm = () => {
    // Handle confirmation action
    setShowAlert(false);
  };

  const handleCancel = () => {
    // Handle cancel action
    setShowAlert(false);
  };

  return (
    <View>
      <Button title="Show Alert" onPress={() => setShowAlert(true)} />
      {showAlert && (
        <CustomAlert
          title="Custom Alert"
          message="This is a custom alert box."
          onCancel={handleCancel}
          onConfirm={handleConfirm}
        />
      )}
    </View>
  );
};

export default MyComponentAlert;
