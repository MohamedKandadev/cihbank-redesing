// src/components/BankCard.tsx
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface BankCardProps {
  cardNumber: string;
  balance: number;
}

const BankCard: React.FC<BankCardProps> = ({cardNumber, balance}) => {
  // Format card number to show only last 4 digits
  const maskedCardNumber = `•••• •••• •••• ${cardNumber.slice(-4)}`;

  // Format balance with currency
  const formattedBalance = new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'MAD',
  }).format(balance);

  return (
    <View style={styles.cardContainer}>
      <LinearGradient
        colors={['#E85412', '#F37238']}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 0}}
        style={styles.gradient}>
        <View style={styles.cardContent}>
          <View style={styles.topContent}>
            <Text style={styles.cardLabel}>Numéro de carte</Text>
            <Text style={styles.cardNumber}>{maskedCardNumber}</Text>
          </View>

          <View style={styles.bottomContent}>
            <View>
              <Text style={styles.balanceLabel}>Votre solde</Text>
              <Text style={styles.balanceAmount}>{formattedBalance}</Text>
            </View>

            {/* Card chip and logo */}
            <View style={styles.chipContainer}>
              <View style={styles.chip} />
              <View style={styles.cardType}>
                <Text style={styles.cardTypeText}>VISA</Text>
              </View>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    height: 180,
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5.84,
    elevation: 8,
  },
  gradient: {
    flex: 1,
    borderRadius: 20,
  },
  cardContent: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  topContent: {
    gap: 8,
  },
  bottomContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  cardLabel: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 12,
    fontWeight: '500',
  },
  cardNumber: {
    color: 'white',
    fontSize: 18,
    letterSpacing: 2,
    fontWeight: '600',
  },
  balanceLabel: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 12,
    marginBottom: 4,
    fontWeight: '500',
  },
  balanceAmount: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  chipContainer: {
    alignItems: 'flex-end',
    gap: 10,
  },
  chip: {
    width: 35,
    height: 25,
    backgroundColor: '#FFD700',
    borderRadius: 4,
    opacity: 0.9,
  },
  cardType: {
    alignItems: 'flex-end',
  },
  cardTypeText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});

export default BankCard;
