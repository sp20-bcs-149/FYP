import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Modal } from 'react-native';

export default function App() {
  const [isContextMenuVisible, setContextMenuVisible] = useState(false);
  const [contextMenuPosition, setContextMenuPosition] = useState({ x: 0, y: 0 });

  const handleLongPress = (event) => {
    const { pageX, pageY } = event.nativeEvent;
    setContextMenuPosition({ x: pageX, y: pageY });

    setTimeout(() => {
      setContextMenuVisible(true);
    }, 2000); // Show options after 2 seconds
  };

  const handleEdit = () => {
    setContextMenuVisible(false);
    alert("Edit Option Pressed");
  };

  const handleDelete = () => {
    setContextMenuVisible(false);
    alert("Delete Option Pressed");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onLongPress={handleLongPress}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Click Me</Text>
      </TouchableOpacity>

      <Modal
        transparent={true}
        visible={isContextMenuVisible}
        animationType="slide"
        onRequestClose={() => setContextMenuVisible(false)}
      >
        <View
          style={[
            styles.contextMenu,
            {
              top: contextMenuPosition.y - 40, // Adjusted position
              left: contextMenuPosition.x - 10, // Adjusted position
            },
          ]}
        >
          <TouchableOpacity onPress={handleEdit} style={styles.contextMenuItem}>
            <Text>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleDelete} style={styles.contextMenuItem}>
            <Text>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setContextMenuVisible(false)} style={styles.contextMenuItem}>
            <Text>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 8,
    width: 150,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  contextMenu: {
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  contextMenuItem: {
    padding: 10,
  },
});
