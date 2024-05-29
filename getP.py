import sys
import math
import time
import numpy as np
from multiprocessing import Process, Queue

def sieve_of_eratosthenes(limit, output_queue, index):
    is_prime = np.ones(limit + 1, dtype=np.bool_)
    is_prime[:2] = False

    for i in range(2, int(math.sqrt(limit)) + 1):
        if is_prime[i]:
            is_prime[i*i:limit+1:i] = False

    primes = np.nonzero(is_prime)[0]
    output_queue.put((index, primes))

def estimate_upper_limit(n):
    if n < 6:
        return 15
    return math.floor(n * (math.log(n) + math.log(math.log(n))))

def generate_nth_prime(target_index):
    limit = estimate_upper_limit(target_index)
    primes = []

    while len(primes) < target_index:
        processes = []
        output_queue = Queue()

        # Dividindo o trabalho em múltiplos processos
        for i in range(4):  # Defina o número de processos desejados
            process = Process(target=sieve_of_eratosthenes, args=(limit, output_queue, i))
            process.start()
            processes.append(process)

        # Coletando os resultados
        results = [output_queue.get() for _ in range(len(processes))]
        results.sort()  # Ordenando os resultados para garantir a ordem correta

        for _, primes_partial in results:
            if not primes:
                primes = primes_partial.tolist()  # Convertendo numpy array para lista
            else:
                primes.extend(primes_partial)

        # Aguardando a finalização dos processos
        for process in processes:
            process.join()

        limit = math.floor(limit * 1.5)

    return sorted(primes)[target_index - 1]

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python get_prime.py <target_prime_index>")
        sys.exit(1)

    target_prime_index = int(sys.argv[1])

    start_time = time.time()
    nth_prime = generate_nth_prime(target_prime_index)
    end_time = time.time()

    print(f"Execution Time: {end_time - start_time} seconds")
    print(f"O {target_prime_index}º número primo é: {nth_prime}")
