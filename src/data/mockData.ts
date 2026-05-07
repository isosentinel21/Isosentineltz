export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface VideoTutorial {
  id: string;
  title: string;
  description: string;
  duration: string;
  category: string;
  thumbnail: string;
  videoUrl: string;
}

export interface QuizQuestionSimple {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface NoteTopic {
  id: string;
  categoryId: string;
  title: string;
  description: string;
  content: string;
  icon: string;
  tags?: string[];
  questions?: QuizQuestionSimple[];
}

export interface TopicCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export const CATEGORIES: TopicCategory[] = [
  { id: 'os', title: 'Operating System', description: 'Concepts of OS, Kernel, Shell, and process management.', icon: 'Cpu', color: 'cyber-cyan' },
];

export const NOTE_TOPICS: NoteTopic[] = [
  {
    id: 'intro-to-os',
    categoryId: 'os',
    title: 'Introduction to OS',
    description: 'Learn what an OS is, its primary functions, types, and the booting process.',
    icon: 'Cpu',
    tags: ['OS', 'Kernel', 'Shell', 'Booting', 'Linux'],
    questions: [
      {
        question: 'What is an Operating System (OS)?',
        options: ['A type of hardware', 'A bridge between the computer user and hardware', 'A program for browsing the internet', 'A high-speed internet cable'],
        correctAnswer: 1,
        explanation: 'An Operating System acts as an intermediary or bridge between the user and the computer hardware.'
      },
      {
        question: 'Which of the following is considered hardware?',
        options: ['Chrome browser', 'Windows 10', 'CPU, RAM, and Hard Drive', 'The Kernel'],
        correctAnswer: 2,
        explanation: 'Hardware refers to the physical parts of the computer such as CPU, RAM, and Hard Drive.'
      },
      {
        question: 'The main goal of an OS is to provide an environment for users to:',
        options: ['Delete their data', 'Execute programs conveniently and efficiently', 'Break the computer hardware', 'Buy more software'],
        correctAnswer: 1,
        explanation: 'The primary goal of an OS is to make the computer convenient and efficient to use.'
      },
      {
        question: 'Memory Management in OS involves managing which type of memory?',
        options: ['CPU cache', 'Hard drive storage', 'Primary Memory (RAM)', 'USB flash drives'],
        correctAnswer: 2,
        explanation: 'The OS specifically manages the Primary Memory, also known as RAM.'
      },
      {
        question: 'What is "Process Scheduling"?',
        options: ['Organizing files into folders', 'The OS deciding which process gets the CPU and for how long', 'Starting the computer', 'Scanning for viruses'],
        correctAnswer: 1,
        explanation: 'Process Scheduling is the task of managing which program uses the processor (CPU) and when.'
      },
      {
        question: 'Which software is used by the OS to communicate with devices like printers?',
        options: ['Application software', 'Shell', 'Drivers', 'Kernel'],
        correctAnswer: 2,
        explanation: 'Drivers are special programs that allow the OS to communicate with hardware peripherals.'
      },
      {
        question: 'Which function handles creating, deleting, and searching for files?',
        options: ['Memory Management', 'File Management', 'Device Management', 'Security'],
        correctAnswer: 1,
        explanation: 'File Management involves organizing and controlling access to data stored in files and directories.'
      },
      {
        question: 'Which type of OS processes jobs in groups (batches)?',
        options: ['Batch OS', 'Time-Sharing OS', 'Real-Time OS', 'Mobile OS'],
        correctAnswer: 0,
        explanation: 'In a Batch OS, jobs are prepared in groups and processed one by one without direct user interaction.'
      },
      {
        question: 'Time-Sharing OS allows many users to share resources by:',
        options: ['Using multiple CPUs', 'Switching the CPU between users very fast', 'Processing batches of data', 'Running only one program at a time'],
        correctAnswer: 1,
        explanation: 'Time-sharing allows multiple users to share a CPU by switching between them so quickly they feel they have the system to themselves.'
      },
      {
        question: 'Where is a Real-Time OS (RTOS) most likely to be used?',
        options: ['Personal laptops', 'Missile systems or medical imaging', 'Web servers', 'Smartphones'],
        correctAnswer: 1,
        explanation: 'RTOS is used in critical systems where a small delay could be fatal, like air traffic control or medical systems.'
      },
      {
        question: 'What part of the OS is known as the "heart" and interacts directly with hardware?',
        options: ['The Shell', 'The BIOS', 'The User', 'The Kernel'],
        correctAnswer: 3,
        explanation: 'The Kernel is the core program that interacts directly with computer hardware.'
      },
      {
        question: 'What is the role of "The Shell"?',
        options: ['Managing hardware', 'Acting as the heart of the OS', 'Providing an outer layer for user interaction', 'Loading the BIOS'],
        correctAnswer: 2,
        explanation: 'The Shell handles user commands and passes them to the Kernel for execution.'
      },
      {
        question: 'Why is Linux considered "Open Source"?',
        options: ['It can only be used by experts', 'Anyone can see and modify the code', 'It is made by a large corporation', 'It is only for hacking'],
        correctAnswer: 1,
        explanation: 'Open Source means the source code is public, allowing anyone to view, modify, and redistribute it.'
      },
      {
        question: 'Which OS is noted for being difficult for viruses to infect compared to Windows?',
        options: ['MS-DOS', 'Batch OS', 'Linux', 'Distributed OS'],
        correctAnswer: 2,
        explanation: 'Linux is widely praised for its robust security model and resistance to common viruses.'
      },
      {
        question: 'What does "Booting" mean?',
        options: ['Shutting down the computer', 'Managing files', 'The process of starting the computer', 'Connecting to the internet'],
        correctAnswer: 2,
        explanation: 'Booting is the startup sequence that begins when the computer is powered on.'
      },
      {
        question: 'Which small program starts first when the power button is pressed?',
        options: ['Google Chrome', 'BIOS or UEFI', 'The Shell', 'Microsoft Word'],
        correctAnswer: 1,
        explanation: 'BIOS (Basic Input/Output System) or UEFI is the first program that initializes when starting a PC.'
      },
      {
        question: 'What is the primary task of BIOS/UEFI during booting?',
        options: ['Formatting the hard drive', 'Checking if hardware like RAM and Keyboard are working', 'Downloading updates', 'Running games'],
        correctAnswer: 1,
        explanation: 'BIOS/UEFI performs a "POST" (Power-On Self-Test) to ensure critical hardware is functional.'
      },
      {
        question: 'In the final step of booting, where is the OS Kernel loaded?',
        options: ['Into the Hard Drive', 'Into the CPU', 'Into the RAM', 'Into the BIOS'],
        correctAnswer: 2,
        explanation: 'The BIOS loads the OS Kernel into the system memory (RAM) so the computer can start using the OS.'
      },
      {
        question: 'Which of the following is an advantage of Linux?',
        options: ['It is very expensive', 'It needs frequent restarts', 'Stability and Multi-tasking', 'It is closed source'],
        correctAnswer: 2,
        explanation: 'Linux is known for its stability (running for years without restart) and excellent multitasking capabilities.'
      },
      {
        question: 'Who is the "Manager" that controls the computer hardware?',
        options: ['Application software', 'The User', 'The Operating System', 'The Internet'],
        correctAnswer: 2,
        explanation: 'The OS acts as the manager of the computer system, controlling both hardware and software resources.'
      }
    ],
    content: `
---

## 🚀 1. What is an Operating System?

An **Operating System (OS)** is the most important software that runs on a computer. It acts as an **intermediary (a bridge)** between the computer user and the computer hardware.

> **The Main Goal**: To provide an environment in which a user can execute programs in a convenient and efficient manner.

### 🧩 Key Components of a Computer System:

1. **Hardware**: The physical parts like the CPU, RAM, and Hard Drive.
2. **Operating System**: The manager that controls the hardware.
3. **Application Software**: Programs like Chrome, MS Word, or Games.
4. **User**: The person using the computer.

---

## ⚙️ 2. Primary Functions of an OS

The OS acts like a **"Government"** or **"Manager"** of the computer. Its main jobs include:

### 🧠 A. Memory Management
The OS manages the **Primary Memory (RAM)**.
*   It keeps track of every memory location (whether it is free or used).
*   It decides which process gets memory and how much.
*   It "de-allocates" memory when a process no longer needs it.

### ⚡ B. Processor (CPU) Management
In a computer, many programs want to use the CPU at the same time.
*   The OS decides which process gets the CPU and for how long. This is called **Process Scheduling**.

### 🖱️ C. Device Management
The OS communicates with all hardware devices (Printers, Keyboards, Mouse) using special programs called **Drivers**.
*   It keeps track of all devices and decides which process can use a device and for how long.

---

## 📁 3. File & Security Management

### 📂 File Management
The OS organizes data into files and folders (directories).
*   It handles creating, deleting, and searching for files.
*   It controls who can access certain files (**Security**).

### 🛡️ Security and Error Detection
*   **Security**: Prevents unauthorized access to data using passwords and encryption.
*   **Error Detection**: It constantly monitors the system to detect bugs or hardware failures.

---

## 📊 4. Types of Operating Systems

Different computers need different types of OS:

1. **Batch OS**: The user does not interact with the computer directly. Jobs are prepared in groups (batches) and processed one by one.
2. **Time-Sharing OS**: Allows many users to share resources. The CPU switches between users so fast that each user feels they have the whole system to themselves.
3. **Real-Time OS (RTOS)**: Used when time is very critical (e.g., missile systems, medical imaging, air traffic control). A small delay could be fatal.
4. **Distributed OS**: Uses multiple processors to serve multiple users across a network.
5. **Mobile OS**: Designed specifically for smartphones and tablets (e.g., Android, iOS).

---

## 🧱 5. Kernel and Shell (The Core)

*   **The Kernel**: This is the heart of the OS. It interacts directly with the hardware. It is the first program loaded when the computer starts.
*   **The Shell**: This is the outer layer that handles interaction with the user. It takes your commands and gives them to the Kernel.

---

## 🐧 6. Advantages of Linux OS

Linux is highlighted as a powerful OS because:
*   **Open Source**: Anyone can see the code and modify it. Usually free.
*   **Security**: It is very difficult for viruses to infect Linux compared to Windows.
*   **Stability**: Linux systems can run for years without needing a restart.
*   **Multitasking**: It is excellent at running many heavy programs at once without slowing down.
*   **Customization**: You can change almost anything in the look and feel of the system.

---

## 🔑 7. The Booting Process

Booting is the process of starting the computer.

1. **Start-up**: When you press the power button, a small program called **BIOS (Basic Input/Output System) or UEFI** starts.
2. **Self-Check**: It checks if the hardware (RAM, Keyboard, etc.) is working.
3. **Loading**: Then, it loads the **Operating System Kernel** into the RAM, and the computer is ready to use.
`
  },
  {
    id: 'memory-management',
    categoryId: 'os',
    title: 'Memory Management',
    description: 'Learn about process address space, loading, swapping, allocation, paging, and segmentation.',
    icon: 'Cpu',
    tags: ['Memory', 'RAM', 'Paging', 'OS'],
    questions: [
      {
        question: 'What is Memory Management?',
        options: ['Managing only hard drives', 'Handling primary memory and moving processes between RAM and disk', 'Cleaning the computer monitor', 'Installing new software'],
        correctAnswer: 1,
        explanation: 'Memory management handles primary memory (RAM) and coordinates process movement between RAM and secondary storage.'
      },
      {
        question: 'What does the "Process Address Space" represent?',
        options: ['The physical size of the RAM chips', 'The set of logical addresses a process uses in its code', 'The speed of the CPU', 'The number of files on the disk'],
        correctAnswer: 1,
        explanation: 'It is the set of logical addresses that a process uses during its execution.'
      },
      {
        question: 'Which hardware component performs the run-time mapping of virtual addresses to physical addresses?',
        options: ['CPU', 'GPU', 'MMU (Memory Management Unit)', 'BIOS'],
        correctAnswer: 2,
        explanation: 'The Memory Management Unit (MMU) is responsible for translating logical (virtual) addresses to physical ones in RAM.'
      },
      {
        question: 'In static loading/linking, when are modules combined into one program?',
        options: ['During execution', 'Before execution', 'When the user opens a browser', 'Only when an error occurs'],
        correctAnswer: 1,
        explanation: 'Static loading/linking happens before execution, combining all modules into a single absolute program.'
      },
      {
        question: 'What is the main drawback of "Swapping"?',
        options: ['It makes the computer shut down', 'It affects speed because moving data to and from disk takes time', 'It deletes the process data', 'It requires more RAM'],
        correctAnswer: 1,
        explanation: 'Swapping involves disk I/O, which is much slower than RAM, thus affecting system performance.'
      },
      {
        question: 'What is "External Fragmentation"?',
        options: ['Total memory is enough but not contiguous (scattered)', 'A process is given more memory than it needs', 'The hard drive is full', 'The CPU is too slow'],
        correctAnswer: 0,
        explanation: 'External fragmentation occurs when total free memory is sufficient for a request, but it is split into non-contiguous pieces.'
      },
      {
        question: 'How is External Fragmentation fixed by the OS?',
        options: ['By restarting the computer', 'By Compaction (shuffling memory codes to create one large block)', 'By deleting large files', 'By adding more RAM'],
        correctAnswer: 1,
        explanation: 'Compaction is a technique to move memory contents around to coalesce free space into one large contiguous block.'
      },
      {
        question: 'In the "Paging" technique, what are the fixed-size blocks of main memory called?',
        options: ['Pages', 'Segments', 'Frames', 'Blocks'],
        correctAnswer: 2,
        explanation: 'Paging divides a process into "pages" and physical memory into "frames" of the same size.'
      },
      {
        question: 'What is the key difference between Paging and Segmentation?',
        options: ['Paging uses variable-length blocks while Segmentation uses fixed-size blocks', 'Paging uses fixed-size blocks while Segmentation uses variable-length modules', 'Paging is only for Linux, Segmentation is for Windows', 'There is no difference'],
        correctAnswer: 1,
        explanation: 'Paging uses fixed-sized pages/frames, while Segmentation divides programs into variable-sized logical modules.'
      },
      {
        question: 'Where is the Operating System (OS) code typically stored in main memory?',
        options: ['High Memory', 'External Memory', 'Low Memory', 'Virtual Memory'],
        correctAnswer: 2,
        explanation: 'Main memory is usually divided into Low Memory (for the OS) and High Memory (for user processes).'
      }
    ],
    content: `
---

## 🧠 1. What is Memory Management?

**Memory management** is a vital function of an operating system (OS) that handles primary memory, moving processes between main memory and the disk during execution.

> **Key Responsibilities**:
> *   Tracking every memory location (free or allocated).
> *   Determining how much memory each process needs.
> *   Deciding which process receives memory at what time.

---

## 📍 2. Process Address Space

The **Process Address Space** is the set of logical addresses a process uses in its code. A 32-bit system can theoretically address up to 2 gigabytes.

### 🏷️ Types of Addresses:
*   **Symbolic addresses**: Names used in source code (variables, constants).
*   **Relative addresses**: Compiled addresses converted from symbolic names.
*   **Physical addresses**: Actual locations in main memory (RAM) generated when the program is loaded.

---

## ⚙️ 3. Memory Management Unit (MMU)

The **MMU** is a hardware device that handles the run-time mapping of virtual (logical) addresses to physical ones.

*   **How it works**: It often uses a **Base Register**. If the base register is 10,000, a program's request for address 100 is redirected to physical address 10,100.

---

## 🔗 4. Loading and Linking

Developers choose between **Static** and **Dynamic** methods for preparing programs:

1.  **Static Loading/Linking**: The entire program and all required modules are compiled and combined into one absolute program **before** execution.
2.  **Dynamic Loading/Linking**: Only references to external modules (like DLLs in Windows or Shared Objects in Unix) are provided during compilation. They are loaded into memory **only when needed**.

---

## 🔄 5. Swapping

**Swapping** allows the OS to temporarily move a process out of main memory to secondary storage (the disk) to make room for other processes.

*   **Performance**: Swapping affects speed because moving data to/from disk is slow.
*   **Example**: On a disk with 1 MB/s transfer rate, moving a 2048 KB process in and out could take roughly 400 milliseconds (plus overhead).

---

## 🧩 6. Memory Allocation and Fragmentation

Main memory is typically divided into:
*   **Low Memory**: Where the OS resides.
*   **High Memory**: Where user processes are held.

### ⚠️ Fragmentation Issues:
As processes are moved, memory becomes "broken," leading to:
1.  **External Fragmentation**: Total memory is enough for a process, but it is not contiguous (it's in scattered pieces).
    *   *Fix*: **Compaction** shuffles memory contents to create one large free block.
2.  **Internal Fragmentation**: A process is given a memory block larger than it needs, leaving extra space wasted.

---

## 📑 7. Paging

**Paging** is a technique that lets a computer use more memory than is physically installed by using a portion of the hard drive as **Virtual Memory**.

*   **Pages**: Fixed-sized blocks that a process is broken into.
*   **Frames**: Fixed-sized blocks that main memory is divided into.
*   **Page Map Table**: The OS uses this to track which page is in which frame.
*   **Benefits**: Eliminates external fragmentation and makes swapping easier.

---

## 🔮 8. Segmentation

**Segmentation** divides a program into several modules or "segments" based on their function (like the main function, data structures, etc.).

*   **Constraint**: Every segment is loaded into a contiguous block of memory.
*   **Difference**: Unlike paging’s fixed blocks, segments are **variable-length**.
`
  },
  {
    id: 'os-installation',
    categoryId: 'os',
    title: 'OS Installation',
    description: 'Learn about pre-installation requirements, preparation, installation models, and post-installation tasks.',
    icon: 'Cpu',
    tags: ['OS', 'Installation', 'Hardware', 'Driver', 'Dual-Boot'],
    questions: [
      {
        question: 'What is the purpose of a Hardware Compatibility List (HCL)?',
        options: ['List of all computer parts ever made', 'Shows which hardware an OS supports', 'A grocery list for tech stores', 'A list of banned software'],
        correctAnswer: 1,
        explanation: 'Vendors provide an HCL to ensure the OS will function correctly with the specific hardware of the machine.'
      },
      {
        question: 'What was a typical minimum RAM requirement for Windows on Intel-based systems?',
        options: ['16 GB', '4 GB', '32 MB', '1 GB'],
        correctAnswer: 2,
        explanation: 'Typical requirements for base Windows versions often started at 32 MB of memory.'
      },
      {
        question: 'Which OS is noted for allowing anyone to submit drivers due to its open-source nature?',
        options: ['Windows', 'macOS', 'Linux', 'MS-DOS'],
        correctAnswer: 2,
        explanation: 'Linux is open-source, which encourages a wide range of contributors to develop and submit hardware drivers.'
      },
      {
        question: 'Why is "Bad Software" a problem for common PC systems?',
        options: ['It costs too much', 'It takes up no space', 'It causes security and reliability problems', 'It makes the PC too fast'],
        correctAnswer: 2,
        explanation: 'Because PC systems are common, there is a risk of low-quality, untested software impacting stability.'
      },
      {
        question: 'What is a characteristic of "Proprietary Hardware" systems?',
        options: ['They support every OS', 'They only allow one specific OS', 'They are free', 'They never need drivers'],
        correctAnswer: 1,
        explanation: 'Proprietary systems often lock you into a single OS, which can simplify vendor support.'
      },
      {
        question: 'What should you do with your files before installing a new OS?',
        options: ['Delete them', 'Encrypt them', 'Back them up to an external drive', 'Hide them'],
        correctAnswer: 2,
        explanation: 'Installing an OS usually wipes the drive, so a full backup is essential to prevent data loss.'
      },
      {
        question: 'Can installed programs be "backed up" and used immediately after a fresh OS install?',
        options: ['Yes always', 'No, they must be reinstalled', 'Only on Windows', 'Only on Linux'],
        correctAnswer: 1,
        explanation: 'Installed programs cannot be simply copied; they must be reinstalled so they can register with the new OS.'
      },
      {
        question: 'For Windows, which file system is more secure than FAT?',
        options: ['NTFS', 'GIF', 'JPEG', 'MP3'],
        correctAnswer: 0,
        explanation: 'NTFS offers advanced security and permission features that FAT does not provide.'
      },
      {
        question: 'How long might an OS installation take if things do NOT go perfectly?',
        options: ['10 minutes', '1 hour', '8 hours or more', '24 hours exactly'],
        correctAnswer: 2,
        explanation: 'While it might take an hour normally, troubleshooting issues can extend the process to 8 hours or more.'
      },
      {
        question: 'What is a "Standalone" or "Thick Client"?',
        options: ['A system that relies entirely on a server', 'A system with local copies of everything', 'A very heavy laptop', 'A computer with no monitor'],
        correctAnswer: 1,
        explanation: 'Thick Clients hold local copies of the OS and applications, requiring more time to install everything locally.'
      },
      {
        question: 'Which system model is easiest to install because it mostly requires network configuration?',
        options: ['Thick Client', 'Thin Client', 'General Server', 'Dual-Boot'],
        correctAnswer: 1,
        explanation: 'Thin Clients (Networked Clients) rely on servers for files/apps, making local setup much faster.'
      },
      {
        question: 'What is a "Homogenous Server"?',
        options: ['A server for many different OS types', 'A server that serves only identical architectures/OSs', 'A server that is always off', 'A server with no storage'],
        correctAnswer: 1,
        explanation: 'It is the simplest server type because it only supports clients sharing the same architecture.'
      },
      {
        question: 'In a dual-boot setup with Windows and another OS, which should be installed first?',
        options: ['Linux', 'Windows', 'Both at once', 'Doesn\'t matter'],
        correctAnswer: 1,
        explanation: 'It is a rule of thumb to install Windows first to avoid bootloader conflicts.'
      },
      {
        question: 'If dual-booting two versions of Windows, which one should you install first?',
        options: ['The newest', 'The oldest', 'The largest', 'The smallest'],
        correctAnswer: 1,
        explanation: 'Install the oldest version first so the newer one can recognize the existing file system.'
      },
      {
        question: 'What does it mean if a media disc is "bootable"?',
        options: ['It can be used as a coaster', 'The PC starts directly from the disc', 'It contains only games', 'It never works'],
        correctAnswer: 1,
        explanation: 'Bootable media allows the computer to start the installer directly from the disc on startup.'
      },
      {
        question: 'Which tool helps ensure uniform setups in large groups of identical machines?',
        options: ['Microsoft Word', 'Ghost (imaging tool)', 'Calculator', 'Paint'],
        correctAnswer: 1,
        explanation: 'Imaging tools like Ghost allow you to clone a perfect setup across many computers.'
      },
      {
        question: 'Why is the Windows installer called a "Waiting Game"?',
        options: ['Because you wait for it in a queue', 'It asks questions throughout the process', 'It is a literal game', 'It only works at night'],
        correctAnswer: 1,
        explanation: 'Because questions are asked at intervals, an administrator must stay near the machine.'
      },
      {
        question: 'What is "Disk Parceling"?',
        options: ['Selling your hard drive', 'Planning and doubling disk space for growth', 'Dividing the disk into pieces of mail', 'Formatting the disk 100 times'],
        correctAnswer: 1,
        explanation: 'Every new OS version is larger; doubling your estimated needs accounts for future updates.'
      },
      {
        question: 'What should you keep a copy of when upgrading servers?',
        options: ['Desktop wallpapers', 'Browser history', 'Password files and server maps', 'Games'],
        correctAnswer: 2,
        explanation: 'Critical configuration files like password files and maps are needed to restore services after an upgrade.'
      },
      {
        question: 'Why is experimentation (test installation) recommended?',
        options: ['To waste time', 'To see if you can break it', 'To find surprises and practice before final rollout', 'Because it is fun'],
        correctAnswer: 2,
        explanation: 'Practice allows you to document surprises and ensure the final rollout is smooth.'
      }
    ],
    content: `
# 💿 OS Installation

---

## 🏗️ 1. Pre-Installation: Hardware & Software Requirements

Before starting, you must ensure the OS will actually work on your machine.

### 📋 Hardware Compatibility List (HCL)
Most vendors provide an **HCL** to show which hardware their OS supports.

### 💻 Intel-based Systems:
*   **Windows**: Widely used and includes many drivers. Typical requirements include at least a Pentium 166 chip, 32 MB of memory, and 2 GB of disk space.
*   **Linux**: Gaining popularity with increasing driver support. Open-source allows anyone to submit drivers.

> **⚠️ The "Bad Software" Issue**: Because PC systems are so common, there is a risk of low-quality, untested software that can cause security or reliability problems.

### 🖥️ Non-Intel Systems:
*   **Proprietary Hardware**: Some systems only allow one specific OS, which makes your choice easy and simplifies vendor support.
*   **Multi-OS Support**: Other architectures support several OSs (e.g., HP, IBM, or Sun). Often, the second supported OS is a version of Linux.

---

## 🛠️ 2. Preparing for Installation

Preparation is key to avoiding failure.

### 🔍 Hardware Audit
Check components like the motherboard, video cards, and sound cards. Catalog everything and check if device drivers are available.

### 💾 Storage Setup:
*   **Disk Space**: Ensure you meet the minimum recommended space.
*   **Disk Partitions**: Plan how the drive will be divided.
*   **File System**: Use **NTFS** for Windows if you need security features. (FAT partitions are actually less secure).

### 📂 Software & Data:
*   **Compatibility**: Check if the new OS supports the apps you need.
*   **Backup**: Installing a new OS usually wipes the hard drive. Copy all files to an external drive or DVD.
*   **Note on Programs**: You **cannot** "back up" installed programs; you must reinstall them from scratch.

---

## ⏱️ 3. Time and Resource Expectations

Installing an OS is rarely a "set it and forget it" task.

*   **Timing**: If everything goes perfectly, it might take one hour. If things go wrong, it can take **eight hours or more**.
*   **Post-Installation Tasks**: Account for time to install security patches, service packs, and user applications.
*   **Reboots**: Allow time for the multiple restarts required during the process.

---

## 🏗️ 4. Types of Installation Models

The goal of the machine determines how you install it.

### 🖥️ Desktop Systems:
1.  **Standalone ("Thick Client")**: These hold local copies of the OS and all applications. They take the longest to install.
2.  **Networked Client ("Thin Client")**: These hold the OS but rely on servers for files and apps. Very easy to install (mostly network config).

### 🗄️ Server Systems:
*   **General Server**: Difficult to install because they must be configured for various types of clients.
*   **Homogenous Server**: The simplest server type; it only serves clients that share the same architecture or OS.

### 🔄 Specific Scenarios:
*   **Dual-Boot**: Installing two OSs on one drive. **Rule of thumb**: Always install Windows first. If using two versions of Windows, install the oldest version first.

---

## 💿 5. Installation Methods & Challenges

*   **Media**: Most OSs come on CD or DVD and are **"bootable,"** meaning the computer starts directly from the disc.
*   **Windows Surprises**: To ensure uniform setups in large groups, use network tools or **"imaging"** tools like Ghost.
*   **The "Waiting Game"**: Windows installers often ask questions throughout the process, preventing administrators from leaving for long.
*   **Common Issues**: Network interfaces may fail, or drivers on the disc may be outdated.

---

## 🚀 6. Planning for Future Upgrades

*   **Disk Parceling**: Every new OS version is larger. Calculate what you need and then **double it** to account for future growth.
*   **Upgrade Servers**: Keep a copy of your password files, server maps, and current partition info.
*   **Experimentation**: Perform a **test installation**, take notes on surprises, then wipe it and do it again. Practice makes perfect.
`
  },
  {
    id: 'os-services-interfaces',
    categoryId: 'os',
    title: 'OS Services, Interfaces, and Properties',
    description: 'Explore user/system services, CLI/GUI interfaces, system calls, spooling, and real-time systems.',
    icon: 'Cpu',
    tags: ['OS Services', 'System Calls', 'Spooling', 'Multitasking'],
    questions: [
      {
        question: 'What is the primary goal of Operating System services?',
        options: ['To sell more hardware', 'To create a convenient environment for efficient program execution', 'To slow down the CPU', 'To delete user files'],
        correctAnswer: 1,
        explanation: 'The OS functions as a service provider to create a convenient and efficient environment for both users and programs.'
      },
      {
        question: 'Which type of User Interface (UI) uses text-based entry?',
        options: ['GUI', 'CLI (Command-Line Interface)', 'Touchscreen', 'Batch'],
        correctAnswer: 1,
        explanation: 'CLI is a text-based interface where users type commands at a prompt.'
      },
      {
        question: 'What is a Graphical User Interface (GUI)?',
        options: ['A text-only screen', 'A window-based interface with icons and a mouse', 'A remote control', 'A physical keyboard'],
        correctAnswer: 1,
        explanation: 'GUI uses a desktop metaphor with windows, icons, and menus operated by a mouse or touch.'
      },
      {
        question: 'What happens in a "Batch" interface?',
        options: ['User types one command at a time', 'Commands are collected into a file and executed together', 'The computer is turned off', 'The user draws diagrams'],
        correctAnswer: 1,
        explanation: 'Batch processing involves collecting commands into a file (batch) to be executed as a single unit.'
      },
      {
        question: 'Why are I/O operations managed by the Operating System?',
        options: ['Because printers are fast', 'Programs cannot talk to hardware directly for security and efficiency', 'To make the monitor brighter', 'To save electricity'],
        correctAnswer: 1,
        explanation: 'The OS acts as a manager because direct program-to-hardware access is dangerous and complex.'
      },
      {
        question: 'What does "File-System Manipulation" involve?',
        options: ['Only renaming files', 'Ability to read, write, create, delete, search, and manage permissions', 'Eating data', 'Installing new hardware'],
        correctAnswer: 1,
        explanation: 'It covers all aspects of file management, including creation, deletion, and access control.'
      },
      {
        question: 'What are the two common methods for process communication?',
        options: ['Email and Phone', 'Shared Memory and Message Passing', 'Writing on paper and Screaming', 'None of the above'],
        correctAnswer: 1,
        explanation: 'Processes communicate via Shared Memory (using same RAM space) or Message Passing (OS moves data packets).'
      },
      {
        question: 'What is "Resource Allocation" in an OS?',
        options: ['Giving every user a free computer', 'Deciding who gets the CPU, memory, and drive usage', 'Selling computer parts', 'Deleting old files'],
        correctAnswer: 1,
        explanation: 'When many tasks are active, the OS distributes limited system resources (CPU, RAM, I/O) efficiently.'
      },
      {
        question: 'Which OS service is useful for billing or performance tracking?',
        options: ['Security', 'Accounting', 'Error Detection', 'GUI'],
        correctAnswer: 1,
        explanation: 'Accounting keeps logs of users and the resources they consume.'
      },
      {
        question: 'In OS terms, what is the difference between Protection and Security?',
        options: ['There is no difference', 'Protection controls resource access; Security defends against outsiders', 'Protection is for physical locks; Security is for software', 'Security is for files; Protection is for the CPU'],
        correctAnswer: 1,
        explanation: 'Protection ensures controlled access to system resources, while Security defends against external threats (e.g., logins).'
      },
      {
        question: 'What are "System Calls"?',
        options: ['Phone calls to technical support', 'Programming interface (API) to request services from the kernel', 'Error messages', 'BIOS settings'],
        correctAnswer: 1,
        explanation: 'System calls are the "API" for the OS, allowing software to request kernel-level actions.'
      },
      {
        question: 'Which language are most system calls written in?',
        options: ['HTML', 'C or C++', 'Python', 'Basic'],
        correctAnswer: 1,
        explanation: 'System calls are typically implemented in high-level low-level languages like C or C++.'
      },
      {
        question: 'Why do programmers prefer using APIs (like Win32 or POSIX) over direct system calls?',
        options: ['APIs are easier to work with', 'System calls are illegal', 'APIs make the computer faster', 'APIs are colorful'],
        correctAnswer: 0,
        explanation: 'Programmers use structured APIs because they are more convenient and consistent than manual kernel calls.'
      },
      {
        question: 'What is a "Job" in Batch Processing?',
        options: ['A salary paid to the user', 'A unit including the program, data, and control information', 'Working at a tech company', 'Typing on the keyboard'],
        correctAnswer: 1,
        explanation: 'A job is the complete package of program and data processed by a batch system.'
      },
      {
        question: 'What is the "illusion" created by Multitasking?',
        options: ['The computer has multiple monitors', 'That many programs are running at once simultaneously', 'That the CPU is infinite', 'That the computer is sentient'],
        correctAnswer: 1,
        explanation: 'By switching CPU attention very quickly, multitasking makes it seem like all programs are active at once.'
      },
      {
        question: 'In a Hard Real-Time system, what happens if a deadline is missed?',
        options: ['The computer restarts', 'Total system failure', 'A small error message appears', 'Nothing happens'],
        correctAnswer: 1,
        explanation: 'Hard Real-Time systems (like car brakes) have strict deadlines where a miss is catastrophic.'
      },
      {
        question: 'What does "SPOOL" stand for?',
        options: ['Simple Peripheral On-Line', 'Simultaneous Peripheral Operations On-Line', 'System Part Operating On-Line', 'Super Power Operating Level'],
        correctAnswer: 1,
        explanation: 'SPOOL stands for Simultaneous Peripheral Operations On-Line.'
      },
      {
        question: 'How does Spooling help the CPU?',
        options: ['It waits for the printer to finish', 'It "dumps" data to a buffer and moves to the next task immediately', 'It makes the CPU thicker', 'It turns the printer off'],
        correctAnswer: 1,
        explanation: 'Spooling allows the CPU to offload slow tasks (like printing) to a disk buffer so it don\'t have to wait.'
      },
      {
        question: 'Where is data sent during the Spooling process?',
        options: ['To the monitor', 'To a Buffer (temporary storage on disk)', 'To the internet', 'To the user\'s brain'],
        correctAnswer: 1,
        explanation: 'Data is sent to a buffer (a temporary area on the disk) until the target device is ready.'
      },
      {
        question: 'What is the difference between Hard and Soft Real-Time systems?',
        options: ['One is hardware, one is software', 'Hard miss is failure; Soft miss is discouraged but not catastrophic', 'Hard is for servers; Soft is for desktops', 'Hard is faster than Soft'],
        correctAnswer: 1,
        explanation: 'Hard real-time has absolute deadlines; soft real-time has flexible/preferred deadlines.'
      }
    ],
    content: `
# 🛠️ OS Services, Interfaces, and Properties

---

## 🏗️ 1. Introduction to OS Services

The **Operating System (OS)** functions as a service provider for both users and programs. Its primary goal is to create a convenient environment where programs can be executed efficiently.

---

## 👤 2. User-Related OS Services

These services are designed directly to help the user interact with the computer and run their tasks.

*   **User Interface (UI)**: Almost every OS provides a way for users to give commands.
    *   **CLI (Command-Line Interface)**: Text-based entry (Shell).
    *   **GUI (Graphical User Interface)**: Window-based with icons and a mouse (Desktop metaphor).
    *   **Batch**: Commands are collected in a file and executed together.
*   **Program Execution**: The OS loads a program into memory, runs it, and handles how it ends (finishing correctly or reporting an error).
*   **I/O Operations**: Since programs cannot talk to hardware directly, the OS manages all inputs (keyboard/mouse) and outputs (monitor/printer).
*   **File-System Manipulation**: Includes reading, writing, creating, deleting, and searching for files, as well as permission management.
*   **Communications**: Allows processes to "talk" via **Shared Memory** (same RAM space) or **Message Passing** (data packets).
*   **Error Detection**: The OS "watches" for hardware or software errors to keep the system stable.

---

## ⚙️ 3. System-Related OS Services

These focus on the efficiency and "health" of the system itself.

*   **Resource Allocation**: Decides who gets the CPU, memory, and drive access when many tasks are active.
*   **Accounting**: Keeps logs of user resource consumption (billing/tracking).
*   **Protection**: Ensuring all access to system resources is controlled.
*   **Security**: Defending against outsiders (passwords, authentication).

---

## 💻 4. OS Interfaces

### A. User Interfaces (CLI & GUI)
*   **CLI**: Uses a "shell" to interpret text commands. Some OSs (like Unix/Linux) offer many shells (Bourne, C Shell, etc.).
*   **GUI**: Desktop metaphor using a mouse to point and click.

### B. System Calls
System calls are the **"API" for the OS**. They are the programming interface allowing software to request a service from the **kernel**.
*   Usually written in **C or C++**.
*   Most programmers use libraries (like **Win32 for Windows** or **POSIX for Linux**) instead of calling system calls directly because they are easier to work with.

---

## ⚡ 5. Key OS Properties and Techniques

### 📦 Batch Processing
The OS collects programs and data in "batches." It defines a **Job**, which includes the program, software data, and control instructions.

### 🔀 Multitasking (Time-sharing)
The CPU switches between tasks so quickly that users can interact with each program while it runs, creating the **illusion** that many things happen at once.

### ⏱️ Real-Time Systems
Specialized OSs with strict time requirements (car braking, hospital monitors).
*   **Hard Real-Time**: Missing a deadline results in total system failure.
*   **Soft Real-Time**: Missing a deadline is discouraged but not catastrophic.

### 🖨️ Spooling (Simultaneous Peripheral Operations On-Line)
Allows a computer to deal with slow devices (like printers) without slowing down the CPU.
*   **How it works**: Data is sent to a **Buffer** (temporary disk storage). 
*   **Benefit**: The CPU can "dump" a job into the spool and move on immediately.
*   **Parallelism**: It allows reading from a tape, writing to disk, and printing all at the same time.
`
  },
  {
    id: 'os-functions-types',
    categoryId: 'os',
    title: 'OS Function and Types',
    description: 'A comprehensive guide to the computer system structure, core OS functions, and classification of operating systems.',
    icon: 'Cpu',
    tags: ['OS Functions', 'System Structure', 'Batch OS', 'RTOS', 'Distributed OS'],
    questions: [
      {
        question: 'What are the four main components of a computer system?',
        options: ['Hardware, OS, Application Programs, Users', 'CPU, RAM, ROM, Hard Drive', 'Monitor, Keyboard, Mouse, Printer', 'BIOS, Kernel, Shell, Drivers'],
        correctAnswer: 0,
        explanation: 'A computer system is divided into Hardware, Operating System, Application Programs, and Users.'
      },
      {
        question: 'What is the primary role of an Operating System in the system structure?',
        options: ['To browse the internet', 'To control and coordinate the use of hardware among various applications and users', 'To store all user files forever', 'To provide physical power to the computer'],
        correctAnswer: 1,
        explanation: 'The OS controls and coordinates the use of hardware among various applications and users.'
      },
      {
        question: 'How is Main Memory (Primary Memory) defined in the system structure?',
        options: ['A slow storage for long-term data', 'A large array of words or bytes, each with its own address', 'A physical chip that only stores the BIOS', 'A type of removable disk'],
        correctAnswer: 1,
        explanation: 'Main Memory is a large array of words or bytes, each with its own address, providing fast storage directly accessible by the CPU.'
      },
      {
        question: 'Which OS management component acts as a "Traffic Controller"?',
        options: ['Memory Management', 'Device Management', 'Processor Management', 'File Management'],
        correctAnswer: 2,
        explanation: 'Processor Management acts as a traffic controller by keeping track of the processor and the status of processes.'
      },
      {
        question: 'What does the "I/O Controller" specifically manage?',
        options: ['CPU cycles', 'All devices (disk, mouse, printer, etc.) using their respective drivers', 'System passwords', 'The organization of files into folders'],
        correctAnswer: 1,
        explanation: 'The I/O Controller manages all input/output devices using their respective drivers.'
      },
      {
        question: 'In File Management, how is the file system typically organized for easy navigation?',
        options: ['Into one long list', 'Into directories', 'By file size only', 'Randomly across the disk'],
        correctAnswer: 1,
        explanation: 'The file system is usually organized into directories to facilitate navigation and organization.'
      },
      {
        question: 'What is the purpose of the "Job Accounting" function in an OS?',
        options: ['To calculate the cost of the computer', 'To track time and resources used by various users', 'To print payroll checks', 'To count the number of files deleted'],
        correctAnswer: 1,
        explanation: 'Job Accounting tracks the time and resources consumed by various users and jobs.'
      },
      {
        question: 'How does the OS maintain "Control over System Performance"?',
        options: ['By deleting slow programs', 'By recording delays between service requests and responses to improve speed', 'By increasing the CPU voltage', 'By preventing users from running many apps'],
        correctAnswer: 1,
        explanation: 'The OS records delays between service requests and responses to monitor and improve overall system performance.'
      },
      {
        question: 'Which OS function provides aids like "dumps" or "traces" to troubleshoot issues?',
        options: ['Security', 'Device Management', 'Error Detection', 'Job Accounting'],
        correctAnswer: 2,
        explanation: 'Error Detection provides diagnostic aids like dumps, traces, and error messages to find and fix system errors.'
      },
      {
        question: 'In a Batch Operating System, how do users prepare their jobs?',
        options: ['By typing them live on the computer', 'On punch cards or tape and submitting them to an operator', 'By downloading them from the internet', 'Using a graphical mouse interface'],
        correctAnswer: 1,
        explanation: 'In Batch OS, users prepare jobs offline using punch cards or tape and submit them to a computer operator.'
      },
      {
        question: 'What is a major problem with Batch Operating Systems?',
        options: ['The computer is too expensive', 'Lack of interaction between the user and the job while it is running', 'The OS is too complex to install', 'It can only run on mobile phones'],
        correctAnswer: 1,
        explanation: 'The main downside of Batch OS is the complete lack of interaction between the user and the job during execution.'
      },
      {
        question: 'What mechanism in Time-Sharing OS gives each user the feeling of full attention?',
        options: ['Using multiple CPUs for every user', 'The CPU switching between users so rapidly that the system feels dedicated', 'Processing users in batches at night', 'Only allowing one user at a time'],
        correctAnswer: 1,
        explanation: 'Time-sharing uses rapid CPU switching to provide quick responses and allow multiple users to interact with the system simultaneously.'
      },
      {
        question: 'What is a key advantage of a Distributed Operating System?',
        options: ['It is cheaper than other systems', 'High reliability: if one site fails, the others can continue', 'It does not require a network', 'It only works with one processor'],
        correctAnswer: 1,
        explanation: 'Distributed systems offer high reliability because data processing is spread across multiple processors; if one fails, others remain active.'
      },
      {
        question: 'How do processors communicate in a Distributed Operating System?',
        options: ['Via physical mail', 'Via various lines like high-speed buses or telephone lines', 'They do not communicate', 'Using wireless signals only'],
        correctAnswer: 1,
        explanation: 'Processors in a distributed system communicate through communication lines such as high-speed buses or telephone lines.'
      },
      {
        question: 'What is the primary feature of a Network Operating System?',
        options: ['It only works on one computer', 'Shared access to files, printers, and devices among computers in a LAN', 'It is used for missile targeting', 'It makes the internet faster'],
        correctAnswer: 1,
        explanation: 'Network OS runs on a server and facilitates shared access to resources like files and printers across a Local Area Network (LAN).'
      },
      {
        question: 'In a Hard Real-Time system, what is the consequence of missing a deadline?',
        options: ['The user gets an error message', 'Total system failure', 'The system slows down slightly', 'The job is restarted later'],
        correctAnswer: 1,
        explanation: 'In Hard RTOS, missing a strict time deadline results in total system failure.'
      },
      {
        question: 'Which of the following is a typical application for a Real-Time OS?',
        options: ['Word processing', 'Air traffic control or medical imaging', 'Web browsing', 'Playing video games'],
        correctAnswer: 1,
        explanation: 'RTOS is used for critical applications with rigid time requirements like air traffic control and industrial systems.'
      },
      {
        question: 'What is considered a disadvantage of Real-Time Operating Systems?',
        options: ['They are too simple', 'Very complex algorithms and heavy resource use', 'They cannot connect to the internet', 'They do not support memory management'],
        correctAnswer: 1,
        explanation: 'RTOS are highly complex and use heavy resources to guarantee strict performance and timing.'
      },
      {
        question: 'For which devices are Mobile Operating Systems specifically designed?',
        options: ['Supercomputers', 'Smartphones, tablets, and wearables', 'Car engines only', 'Printers and scanners'],
        correctAnswer: 1,
        explanation: 'Mobile OSs are tailored exclusively for handheld devices like smartphones and tablets.'
      },
      {
        question: 'What handheld-specific features do Mobile OSs typically combine with PC features?',
        options: ['Touchscreens, Bluetooth, Wi-Fi, and GPS', 'Physical keys only', 'Support for punch cards', 'Floppy disk drives'],
        correctAnswer: 0,
        explanation: 'Mobile OSs integrate standard PC functionality with handheld needs like touchscreens, wireless connectivity, and GPS.'
      }
    ],
    content: `
# ⚙️ OS Function and Types

---

## 🏗️ 1. Computer System Structure

A computer system is divided into four main components:

*   **Hardware**: Provides the basic computing resources (**CPU**, **Memory**, **I/O devices**).
*   **Operating System**: Controls and coordinates the use of hardware among various applications and users.
*   **Application Programs**: Define how system resources are used to solve computing problems (e.g., Word processors, Web browsers, Video games).
*   **Users**: People, machines, or other computers using the system.

---

## ⚙️ 2. Core Functions of an Operating System

The OS performs several critical roles to ensure the system runs smoothly:

### 🧠 A. Memory Management
*   **Definition**: Management of Primary Memory (Main Memory).
*   **Main Memory**: A large array of words/bytes, each with its own address. It is fast storage directly accessible by the CPU.
*   **OS Activities**:
    *   Keeps track of every memory byte (who is using it and what is free).
    *   Decides which process gets memory and how much.
    *   Allocates memory when a process requests it and "de-allocates" it when the process finishes.

### ⚡ B. Processor Management
*   **Traffic Controller**: The OS keeps track of the processor and the status of processes.
*   **Scheduling**: Decides which process gets the processor and for how long.
*   **Allocation**: Assigns the CPU to a process and reclaims it when no longer needed.

### 🖱️ C. Device Management
*   **I/O Controller**: Manages all devices (disk, mouse, printer, etc.) using their respective drivers.
*   **OS Activities**: Decides which process gets a device, for how long, and handles the efficient allocation/de-allocation of those devices.

### 📂 D. File Management
*   **File System**: Usually organized into directories for easy navigation.
*   **OS Activities**: Keeps track of information location, use, and status. It handles the creation and deletion of files/directories and manages access permissions.

### 🛡️ E. Additional Functions
*   **Security**: Prevents unauthorized access to programs and data via passwords.
*   **Control over System Performance**: Records delays between service requests and responses to improve speed.
*   **Job Accounting**: Tracks time and resources used by various users.
*   **Error Detection**: Provides aids like "dumps" or "traces" to find and fix errors.

---

## 📊 3. Types of Operating Systems

OSs are classified based on how they process jobs and manage resources:

### 📦 1. Batch Operating System
*   **Concept**: Users do not interact with the computer directly. Users prepare "jobs" (on punch cards or tape) and submit them to a computer operator.
*   **Batching**: The operator sorts jobs with similar requirements into "batches" to speed up processing.
*   **Problem**: There is a lack of interaction between the user and the job while it is running. The CPU is often idle because I/O devices are slower than the CPU.

### 🔀 2. Time-Sharing Operating Systems
*   **Concept**: Allows many people at different terminals to use a single computer system at the same time.
*   **Mechanism**: The CPU switches between users so rapidly that each user feels they have the computer's full attention.
*   **Advantages**: Reduces CPU idle time and provides quick response.

### 🌐 3. Distributed Operating System
*   **Concept**: Uses multiple central processors to serve multiple real-time applications and users. Data processing is distributed among the processors.
*   **Connectivity**: Processors communicate via various lines (like high-speed buses or telephone lines).
*   **Advantages**: If one site fails, the others can continue (**high reliability**). It allows for faster computation and better resource sharing.

### 🗄️ 4. Network Operating System
*   **Concept**: Runs on a server and provides the ability to manage data, users, groups, security, and applications over a network.
*   **Key Feature**: Allows shared access to files, printers, and other devices among computers in a Local Area Network (LAN).
*   **Examples**: Microsoft Windows Server 2003, Linux, Mac OS X.

### ⏱️ 5. Real-Time Operating System (RTOS)
*   **Concept**: Used when there are rigid time requirements on processor operation or data flow.
*   **Types**:
    *   **Hard Real-Time**: Guarantees that critical tasks finish on time. Missing a deadline is a **total system failure**.
    *   **Soft Real-Time**: Critical tasks get priority, but missing a deadline is less catastrophic.
*   **Applications**: Air traffic control, industrial control systems, medical imaging.
*   **Advantages**: Focus on error-free performance and excellent memory management.
*   **Disadvantages**: Very complex algorithms, heavy resource use, and limited multitasking to avoid errors.

### 📱 6. Mobile Operating Systems
*   **Concept**: Designed exclusively for small devices like smartphones, tablets, and wearables.
*   **Features**: Combines PC features with handheld-specific needs (touchscreens, Bluetooth, Wi-Fi, GPS).
*   **Function**: Manages wireless connectivity and starts immediately when the power is turned on.

---

## 📝 4. Summary of Key Differences
*   **Batch**: No interaction; jobs are grouped.
*   **Time-Sharing**: Fast switching between users for interactivity.
*   **Distributed**: Multiple processors working together for reliability.
*   **Network**: Central server managing client machines.
*   **Real-Time**: Strict adherence to time deadlines.
*   **Mobile**: Optimized for portability and wireless networks.
`
  }
];

export const TUTORIAL_VIDEOS: VideoTutorial[] = [];

export const QUIZ_QUESTIONS: QuizQuestion[] = [];
