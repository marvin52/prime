import sys
import math
import time
import numpy as np

def sieve_of_eratosthenes(limit):
  is_prime = np.ones(limit + 1, dtype=bool)
  is_prime[:2] = False
  constant = math.log(math.log(limit))  # Pre-calculate constant

  for i in range(2, int(math.sqrt(limit)) + 1):
    if is_prime[i]:
      is_prime[i*i::i] = False
  return np.flatnonzero(is_prime)  # Use flatnonzero for efficient retrieval

def estimate_upper_limit(n):
  if n < 6:
    return 15
  return math.floor(n * (math.log(n) + constant))

def generate_nth_prime(target_index, constant):
  limit = estimate_upper_limit(target_index)
  primes = sieve_of_eratosthenes(limit)
  return primes[target_index - 1]

if __name__ == "__main__":
  if len(sys.argv) != 2:
    print("Usage: python get_prime.py <target_prime_index>")
    sys.exit(1)

  target_prime_index = int(sys.argv[1])

  # Calculate constant outside the loop
  constant = math.log(math.log(target_prime_index))  # Pre-calculate constant

  start_time = time.time()
  nth_prime = generate_nth_prime(target_prime_index, constant)
  end_time = time.time()

  print(f"Execution Time: {end_time - start_time} seconds")
  print(f"O {target_prime_index}º número primo é: {nth_prime}")
