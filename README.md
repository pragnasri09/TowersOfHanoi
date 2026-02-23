# 🗼 Tower of Hanoi – Recursive Algorithm Implementation

## 📌 Overview
This project demonstrates the classic **Tower of Hanoi** problem using a recursive approach.  
It showcases understanding of recursion, stack behavior, and algorithmic problem-solving.

The Tower of Hanoi is a mathematical puzzle where the objective is to move a stack of disks from one rod to another following specific rules.


## 🎯 Problem Statement
Given three rods and `N` disks of different sizes:

1. Only one disk can be moved at a time.
2. A larger disk cannot be placed on top of a smaller disk.
3. All disks must be moved from the source rod to the destination rod using an auxiliary rod.

## 🧠 Algorithm Approach (Recursive)

The recursive logic follows:

1. Move `N-1` disks from Source → Auxiliary
2. Move 1 disk from Source → Destination
3. Move `N-1` disks from Auxiliary → Destination

### Recursive Formula:
T(n) = 2T(n-1) + 1

Time Complexity: **O(2^n)**  
Space Complexity: **O(n)** (due to recursion stack)


## 🛠️ Technologies Used
- Programming Language: (HTML,CSS,JavaScript – update accordingly)
- Recursion
- Basic Console Input/Output

## ▶️ Sample Output

For `N = 3` disks:
