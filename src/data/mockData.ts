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
  { id: 'cyber-laws', title: 'Cyber Laws', description: 'Legal frameworks, regulations, and ethics in the digital world.', icon: 'Scale', color: 'cyber-cyan' },
];

export const NOTE_TOPICS: NoteTopic[] = [
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
