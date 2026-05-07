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
  { id: 'networking', title: 'Networking Fundamentals', description: 'OSI Model, TCP/IP, and network security.', icon: 'Network', color: 'cyber-cyan' },
  { id: 'linux', title: 'Linux Mastery', description: 'Command line, sysadmin, and security hardening.', icon: 'Terminal', color: 'cyber-pink' },
  { id: 'hacking', title: 'Ethical Hacking', description: 'Vulnerability assessment and pentesting.', icon: 'Shield', color: 'cyber-cyan' },
  { id: 'defense', title: 'Cyber Defense', description: 'Incident response, SOC, and threat hunting.', icon: 'Lock', color: 'cyber-pink' },
  { id: 'os', title: 'Operating System', description: 'Concepts of OS, Kernel, Shell, and process management.', icon: 'Cpu', color: 'cyber-cyan' },
  { id: 'cyber-laws', title: 'Cyber Laws', description: 'Legal frameworks, regulations, and ethics in the digital world.', icon: 'Scale', color: 'cyber-cyan' },
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
    id: 'networking-basics',
    categoryId: 'networking',
    title: 'Networking Basics',
    description: 'Master the fundamentals of computer networks, OSI models, and TCP/IP.',
    icon: 'Network',
    tags: ['CyberSecurity', 'Networking', 'TCP/IP', 'OSI Model'],
    questions: [
      {
        question: 'Which OSI layer is responsible for logical addressing (IP)?',
        options: ['Physical Layer', 'Data Link Layer', 'Network Layer', 'Transport Layer'],
        correctAnswer: 2,
        explanation: 'The Network Layer handles logical addressing and routing.'
      },
      {
        question: 'What does TCP stand for?',
        options: ['Terminal Control Protocol', 'Transmission Control Protocol', 'Technical Communication Protocol', 'Total Computer Protection'],
        correctAnswer: 1,
        explanation: 'TCP stands for Transmission Control Protocol, a core protocol of the Internet Protocol Suite.'
      },
      {
        question: 'Which protocol is used for secure web browsing?',
        options: ['HTTP', 'FTP', 'HTTPS', 'SSH'],
        correctAnswer: 2,
        explanation: 'HTTPS (Hypertext Transfer Protocol Secure) encrypts communication between the browser and server.'
      },
      {
        question: 'What is the purpose of the Address Resolution Protocol (ARP)?',
        options: ['Map IP addresses to MAC addresses', 'Route packets between networks', 'Assign dynamic IP addresses', 'Encrypt network traffic'],
        correctAnswer: 0,
        explanation: 'ARP is used to resolve a known IP address to a hardware MAC address on a local area network.'
      },
      {
        question: 'Which device operates primarily at Layer 2 of the OSI model?',
        options: ['Router', 'Hub', 'Switch', 'Firewall'],
        correctAnswer: 2,
        explanation: 'Network switches operate at the Data Link Layer (Layer 2) using MAC addresses.'
      },
      {
        question: 'What is the default port for the SSH protocol?',
        options: ['21', '22', '23', '80'],
        correctAnswer: 1,
        explanation: 'Secure Shell (SSH) uses TCP port 22 by default.'
      }
    ],
    content: `# Networking Fundamentals
    
Computer networking is the practice of connecting computers together to share resources.

## The OSI Model
The Open Systems Interconnection (OSI) model is a conceptual framework used to understand network interactions in seven layers:
1. **Physical Layer**: Bit stream, cables, and hardware.
2. **Data Link Layer**: Framing, MAC addresses.
3. **Network Layer**: IP routing, logical addressing.
4. **Transport Layer**: TCP/UDP, error checking.
5. **Session Layer**: Managing sessions between apps.
6. **Presentation Layer**: Data encryption, formatting.
7. **Application Layer**: User interaction (HTTP, FTP).

\`\`\`bash
# Check your IP address
ip addr show
\`\`\`
`
  },
  {
    id: 'dns-security',
    categoryId: 'networking',
    title: 'DNS & Domain Security',
    description: 'Understand how DNS works and how to secure it against redirection attacks.',
    icon: 'Network',
    tags: ['DNS', 'Security', 'Web'],
    content: `# DNS Security
DNS (Domain Name System) is the phonebook of the Internet.
`
  },
  {
    id: 'linux-fundamentals',
    categoryId: 'linux',
    title: 'Linux Fundamentals',
    description: 'Basic command line, file systems, and user management in Linux.',
    icon: 'Terminal',
    tags: ['Linux', 'Terminal', 'SysAdmin', 'Bash'],
    questions: [
      {
        question: 'Which command is used to list files in a directory?',
        options: ['cd', 'ls', 'pwd', 'cat'],
        correctAnswer: 1,
        explanation: "The 'ls' command stands for list and is used to display directory contents."
      },
      {
        question: 'How do you change file permissions in Linux?',
        options: ['chperm', 'chmod', 'chown', 'setperm'],
        correctAnswer: 1,
        explanation: 'The chmod (Change Mode) command is used to set file and directory permissions.'
      },
      {
        question: 'What does the "cd" command do?',
        options: ['Copy Directory', 'Create Directory', 'Change Directory', 'Clear Data'],
        correctAnswer: 2,
        explanation: 'The cd command is used to change the current working directory in the terminal.'
      },
      {
        question: 'Which symbol represents the root directory in Linux?',
        options: ['~', '/', '.', '..'],
        correctAnswer: 1,
        explanation: 'The forward slash (/) represents the root directory, the top-most level of the file system.'
      },
      {
        question: 'Which command tells you which user you are currently logged in as?',
        options: ['who', 'user', 'whoami', 'id'],
        correctAnswer: 2,
        explanation: 'The whoami command prints the effective username of the current user.'
      },
      {
        question: 'What is the command to create a new directory?',
        options: ['mkdir', 'newdir', 'create', 'dir'],
        correctAnswer: 0,
        explanation: 'mkdir (Make Directory) is used to create new folders or directories.'
      }
    ],
    content: `# Linux Basics
Linux is the backbone of cybersecurity tools.

## Basic Commands
- \`ls\`: List files
- \`cd\`: Change directory
- \`pwd\`: Print working directory
- \`chmod\`: Change permissions

\`\`\`bash
# Set permissions to read/write/execute for owner
chmod 700 secret_script.sh
\`\`\`
`
  },
  {
    id: 'bash-scripting',
    categoryId: 'linux',
    title: 'Bash Scripting for Security',
    description: 'Automate tasks and create security tools using Bash scripts.',
    icon: 'Terminal',
    tags: ['Bash', 'Automation', 'Scripting'],
    content: `# Bash Scripting
Automation is key in security operations.
`
  },
  {
    id: 'ethical-hacking',
    categoryId: 'hacking',
    title: 'Ethical Hacking',
    description: 'Learn the principles and methodology of professional penetration testing.',
    icon: 'Shield',
    tags: ['EthicalHacking', 'Pentesting', 'SecOps', 'VulnerabilityAnalysis'],
    questions: [
      {
        question: 'What is the first step in the Ethical Hacking methodology?',
        options: ['Scanning', 'Gaining Access', 'Reconnaissance', 'Maintaining Access'],
        correctAnswer: 2,
        explanation: 'Reconnaissance (Information Gathering) is the crucial first step to understand the target.'
      },
      {
        question: 'What is a "White Hat" hacker?',
        options: ['A malicious attacker', 'An ethical security professional', 'A hacker who works for the government', 'A hacker who only steals for fun'],
        correctAnswer: 1,
        explanation: 'White Hat hackers are authorized security professionals who help organizations find and fix vulnerabilities.'
      },
      {
        question: 'Which tool is primarily used for packet analysis?',
        options: ['Nmap', 'Burp Suite', 'Wireshark', 'Metasploit'],
        correctAnswer: 2,
        explanation: 'Wireshark is a powerful network protocol analyzer used to capture and inspect packets.'
      },
      {
        question: 'What is "Phishing"?',
        options: ['A physical security breach', 'A type of social engineering attack', 'A network sniffing technique', 'A password cracking method'],
        correctAnswer: 1,
        explanation: 'Phishing is a social engineering attack where attackers deceive people into revealing sensitive information.'
      },
      {
        question: 'What does "DDoS" stand for?',
        options: ['Direct Denial of Service', 'Distributed Denial of Service', 'Data Delivery of Service', 'Distributed Data of Service'],
        correctAnswer: 1,
        explanation: 'DDoS stands for Distributed Denial of Service, where multiple compromised systems attack a target.'
      },
      {
        question: 'Which of the following is a vulnerability scanner?',
        options: ['Nmap', 'Nessus', 'Wireshark', 'Putty'],
        correctAnswer: 1,
        explanation: 'Nessus is a widely used vulnerability scanner that helps identify security weaknesses.'
      }
    ],
    content: `# Ethical Hacking 101
The methodology follows these steps:
1. Reconnaissance
2. Scanning
3. Gaining Access
4. Maintaining Access
5. Covering Tracks
`
  },
  {
    id: 'cyber-laws-intro',
    categoryId: 'cyber-laws',
    title: 'Introduction to Cyber Laws',
    description: 'Learn about the legal aspects of cybersecurity and international regulations.',
    icon: 'Scale',
    tags: ['CyberLaw', 'Ethics', 'Legal', 'Privacy'],
    questions: [
      {
        question: 'Sheria ya Makosa ya Mitandao (Cybercrimes Act) inashughulika na nini hasa?',
        options: ['Kutengeneza tovuti', 'Vitendo vya kihalifu vinavyofanywa kupitia teknolojia', 'Kununua kompyuta mpya', 'Kuongeza kasi ya intaneti'],
        correctAnswer: 1,
        explanation: 'Sheria hii inalenga kuzuia na kuadhibu makosa yanayofanywa kwa kutumia mifumo ya kompyuta.'
      },
      {
        question: 'CIA Triad ni mhimili wa usalama wa habari. C inasimama badala ya nini?',
        options: ['Control', 'Confidentiality', 'Correction', 'Communication'],
        correctAnswer: 1,
        explanation: 'Confidentiality (Siri) inahakikisha kuwa taarifa zinaonekana na watu walioruhusiwa pekee.'
      },
      {
        question: 'Ni ipi kati ya hizi ni kosa la mtandao kisheria?',
        options: ['Kusoma habari mtandaoni', 'Kutuma barua pepe ya kiofisi', 'Wizi wa utambulisho (Identity Theft)', 'Kupakua programu halali'],
        correctAnswer: 2,
        explanation: 'Kuiba utambulisho wa mtu mwingine ili kufanya uhalifu ni kosa kubwa la mtandao.'
      },
      {
        question: 'Lengo kuu la Sheria ya Ulinzi wa Data Binafsi ni nini?',
        options: ['Kuuza data za watumiaji', 'Kulinda faragha na usalama wa taarifa za watu', 'Kuzuia watu wasitumie mitandao ya kijamii', 'Kupunguza matumizi ya data za simu'],
        correctAnswer: 1,
        explanation: 'Inahakikisha mashirika yanatunza siri za wateja wao na kutozifunua bila kibali.'
      },
      {
        question: '"Phishing" ni mbinu ambayo kisheria inachukuliwa kama?',
        options: ['Mbinu ya masoko', 'Udanganyifu (Fraud) mtandaoni', 'Utafiti wa soko', 'Huduma kwa wateja'],
        correctAnswer: 1,
        explanation: 'Phishing ni jaribio la kitapeli la kupata siri za watu kama nywila au namba za kadi.'
      },
      {
        question: 'Ni nani anayepaswa kufuata sheria za mtandao?',
        options: ['Wataalamu wa IT pekee', 'Vyombo vya usalama pekee', 'Kila mtu anayetumia teknolojia ya mawasiliano', 'Watu wanaomiliki tovuti pekee'],
        correctAnswer: 2,
        explanation: 'Sheria inamhusu kila mtumiaji wa mifumo ya mawasiliano bila kujali taaluma yake.'
      }
    ],
    content: `# Sheria za Mtandao (Cyber Laws)

Sheria za mtandao ni mfululizo wa kanuni na sheria zinazosimamia tabia za watu wanapotumia teknolojia ya habari na mawasiliano (TEHAMA).

## Umuhimu wa Sheria za Mtandao
1. **Kulinda Faragha**: Kuhakikisha data binafsi za watumiaji hazitumiwi vibaya.
2. **Kuzuia Uhalifu**: Kupambana na makosa kama vile wizi wa utambulisho, utapeli, na unyanyasaji wa mtandaoni.
3. **Usalama wa Taifa**: Kulinda miundombinu muhimu ya nchi.

## Mifumo mikuu ya Sheria
- **Sheria ya Makosa ya Mitandao (Cybercrimes Act)**: Inashughulika na vitendo vya kihalifu mtandaoni.
- **Sheria ya Ulinzi wa Data Binafsi**: Inasimamia namna mashirika yanavyokusanya na kutunza taarifa za watu.

\`\`\`bash
# Kumbuka: Usalama unaanza na wewe!
\`\`\`
`
  }
];

export const TUTORIAL_VIDEOS: VideoTutorial[] = [
  {
    id: 'v1',
    title: 'Intro to SQL Injection',
    description: 'Learn how to identify and prevent SQL injection vulnerabilities.',
    duration: '15:20',
    category: 'Web Security',
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=300',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 'v2',
    title: 'Wireshark for Beginners',
    description: 'Master packet analysis with Wireshark.',
    duration: '22:45',
    category: 'Networking',
    thumbnail: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=300',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What does the acronym CIA stand for in information security?',
    options: [
      'Central Intelligence Agency',
      'Confidentiality, Integrity, Availability',
      'Cyber Integrity Access',
      'Compliance, Inspection, Audit'
    ],
    correctAnswer: 1,
    explanation: 'The CIA triad is a foundational model designed to guide policies for information security.',
    difficulty: 'Beginner'
  },
  {
    id: 'q2',
    question: 'Which tool is commonly used for network scanning and vulnerability discovery?',
    options: [
      'Nmap',
      'Wireshark',
      'Burp Suite',
      'John the Ripper'
    ],
    correctAnswer: 0,
    explanation: 'Nmap (Network Mapper) is the industry standard for network scanning.',
    difficulty: 'Beginner'
  }
];
