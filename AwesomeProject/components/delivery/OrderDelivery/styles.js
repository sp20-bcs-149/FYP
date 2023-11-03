import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
  infoContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  infoText: {
    fontSize: 25,
    fontWeight: '600',
    letterSpacing: 1,
  },
  icon: {
    marginHorizontal: 10,
  },
  productDetailsContainer: {
    paddingHorizontal: 20,
  },
  iconStore: {
    fontSize: 22,
    color: '#329998',
  },
  heading: {
    fontSize: 20,
    fontWeight: '600',
  },
  productName: {
    fontSize: 20,
    fontWeight: '600',
    letterSpacing: 1,
    paddingVertical: 5,
  },
  productPrice: {
    fontSize: 20,
    fontWeight: '600',
    color: 'grey',
  },
  productRating: {
    fontSize: 20,
    fontWeight: '600',
    paddingBottom: 20,
    color: 'grey',
  },
  iconLocation: {
    fontSize: 22,
    color: '#329998',
  },
  destinationContainer: {
    borderTopWidth: 1,
    borderColor: 'lightgrey',
    marginTop: 10,
  },
  destinationHeading: {
    fontSize: 20,
    fontWeight: '600',
  },
  destinationAddress: {
    fontSize: 20,
    color: 'grey',
    fontWeight: '600',
    letterSpacing: 1,
  },
  acceptButtonContainer: {
    backgroundColor: '#329998',
    marginTop: 'auto',
    marginVertical: 30,
    marginHorizontal: 10,
    borderRadius: 20,
  },
  acceptButtonText: {
    color: 'white',
    textAlign: 'center',
    letterSpacing: 0.5,
    fontSize: 30,
    paddingVertical: 15,
    fontWeight: '700',
  },
});

export default styles;
