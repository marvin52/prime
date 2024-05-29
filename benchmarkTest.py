import sys
import time
from sympy import prime as sympy_prime
#   

def get_nth_prime_sympy(n):
    return sympy_prime(n)

# def get_nth_prime_primesieve(n):
#     return primesieve.nth_prime(n)

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python solucao.py <target_prime_index>")
        sys.exit(1)

    target_prime_index = int(sys.argv[1])

    start_time = time.time()
    nth_prime_sympy = get_nth_prime_sympy(target_prime_index)
    end_time = time.time()

    print(f"Execution Time with sympy: {end_time - start_time} seconds")
    print(f"The {target_prime_index}th prime number (using sympy) is: {nth_prime_sympy}")

    # start_time = time.time()
    # nth_prime_primesieve = get_nth_prime_primesieve(target_prime_index)
    # end_time = time.time()

    # print(f"Execution Time with primesieve: {end_time - start_time} seconds")
    # print(f"The {target_prime_index}th prime number (using primesieve) is: {nth_prime_primesieve}")
