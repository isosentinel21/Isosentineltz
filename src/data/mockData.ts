export interface NoteTopic {
  id: string;
  title: string;
  description: string;
  content: string;
  icon: string;
  tags?: string[];
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

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

export const NOTE_TOPICS: NoteTopic[] = [
  {
    id: 'networking-basics',
    title: 'Networking Basics',
    description: 'Master the fundamentals of computer networks, OSI models, and TCP/IP.',
    icon: 'Network',
    tags: ['CyberSecurity', 'Networking', 'TCP/IP', 'OSI Model'],
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
    id: 'linux-fundamentals',
    title: 'Linux Fundamentals',
    description: 'Basic command line, file systems, and user management in Linux.',
    icon: 'Terminal',
    tags: ['Linux', 'Terminal', 'SysAdmin', 'Bash'],
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
    id: 'ethical-hacking',
    title: 'Ethical Hacking',
    description: 'Learn the principles and methodology of professional penetration testing.',
    icon: 'Shield',
    tags: ['EthicalHacking', 'Pentesting', 'SecOps', 'VulnerabilityAnalysis'],
    content: `# Ethical Hacking 101
The methodology follows these steps:
1. Reconnaissance
2. Scanning
3. Gaining Access
4. Maintaining Access
5. Covering Tracks
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
