import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

const RecentTransactions = ({}) => {
  const transactions = [
    {
      id: 1,
      type: 'receive',
      name: 'Mohamed Kandad',
      date: '2024-12-24',
      time: '14:30',
      amount: '+2000 MAD',
    },
    {
      id: 2,
      type: 'send',
      name: 'Fatima Zahra',
      date: '2024-12-23',
      time: '10:15',
      amount: '-300 MAD',
    },
    {
      id: 3,
      type: 'receive',
      name: 'Amine H.',
      date: '2024-12-22',
      time: '09:00',
      amount: '+150 MAD',
    },
    {
      id: 4,
      type: 'send',
      name: 'Ali B.',
      date: '2024-12-21',
      time: '20:45',
      amount: '-500 MAD',
    },
  ];

  const renderItem = ({item}) => (
    <View style={styles.transactionItem}>
      <View style={styles.transactionIconContainer}>
        <Image
          source={
            item.type === 'receive'
              ? require('../assets/icons/receive.png')
              : require('../assets/icons/send.png')
          }
          style={styles.transactionIcon}
          tintColor={item.type === 'receive' ? '#28A745' : '#DC3545'} // Green for receive, Red for send
        />
      </View>
      <View style={styles.transactionDetails}>
        <Text style={styles.transactionName}>{item.name}</Text>
        <Text style={styles.transactionDate}>
          {item.time} . {item.date}
        </Text>
      </View>
      <Text
        style={[
          styles.transactionAmount,
          {color: item.type === 'receive' ? '#28A745' : '#DC3545'},
        ]}>
        {item.amount}
      </Text>
    </View>
  );

  return (
    <View style={styles.transactionsContainer}>
      <View style={styles.header}>
        <Text style={styles.transactionsTitle}>Transactions Récentes</Text>
        <TouchableOpacity onPress={() => console.log('TransactionsScreen')}>
          <Text style={styles.seeAll}>Voir tout</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={transactions}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        scrollEnabled={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  transactionsContainer: {
    marginTop: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  transactionsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
  },
  seeAll: {
    fontSize: 14,
    color: '#E85412',
    fontWeight: '500',
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EAEAEA',
  },
  transactionIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#EAEAEA',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EAEAEA',
  },
  transactionIcon: {
    width: 30,
    height: 30,
  },
  transactionDetails: {
    flex: 1,
    marginLeft: 10,
  },
  transactionName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333333',
  },
  transactionDate: {
    fontSize: 12,
    color: '#888888',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default RecentTransactions;
