import { Metadata } from "next"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "About - AZAI Labs",
  description: "Learn about AZAI Labs' mission, principles, and the team behind our agentic automation solutions.",
}

const principles = [
  {
    title: "Quality First",
    description: "We believe in building systems that are reliable, secure, and maintainable from day one.",
    icon: "🔒"
  },
  {
    title: "AI-Powered",
    description: "Leveraging cutting-edge AI to create intelligent, autonomous solutions that learn and adapt.",
    icon: "🧠"
  },
  {
    title: "Human-Centric",
    description: "Technology should augment human capabilities, not replace them. We design with people in mind.",
    icon: "👥"
  },
  {
    title: "Results-Driven",
    description: "Every solution we build is measured by its real-world impact and business value.",
    icon: "📊"
  }
]

const team = [
  {
    name: "Arifuz Zaman Antor",
    role: "Founder & CEO",
    bio: "AI engineer and automation expert with a passion for building systems that work.",
    avatar: "AZ"
  },
  {
    name: "AI Team",
    role: "Machine Learning Engineers",
    bio: "Specialists in large language models, computer vision, and autonomous systems.",
    avatar: "AI"
  },
  {
    name: "Engineering Team",
    role: "Full-Stack Developers",
    bio: "Building robust, scalable infrastructure and beautiful user experiences.",
    avatar: "EN"
  }
]

export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-display-1 mb-6">
            About <span className="gradient-text">AZAI Labs</span>
          </h1>
          <p className="text-body text-muted-foreground max-w-3xl mx-auto">
            We're a remote-first AI engineering studio building agentic systems that automate real work. 
            Our mission is to help organizations build with agents, not headcount.
          </p>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-20"
        >
          <div className="bg-muted/30 rounded-3xl p-12 border border-border/50">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-display-2 mb-6">Our Mission</h2>
              <p className="text-body-large text-muted-foreground leading-relaxed">
                To democratize access to intelligent automation by building AI agents that are powerful enough 
                to handle complex tasks, yet simple enough for any team to deploy and manage. We believe the 
                future of work is collaborative—humans and AI working together to achieve what neither could do alone.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Principles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-display-2 text-center mb-12">Our Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <Card className="h-full border-border/50 hover:border-border transition-colors">
                  <CardHeader>
                    <div className="text-4xl mb-4">{principle.icon}</div>
                    <CardTitle className="text-xl">{principle.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-muted-foreground">
                      {principle.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-display-2 text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <Card className="text-center border-border/50 hover:border-border transition-colors">
                  <CardHeader>
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold text-xl">{member.avatar}</span>
                    </div>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <Badge variant="secondary" className="w-fit mx-auto">
                      {member.role}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm text-muted-foreground">
                      {member.bio}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-muted/30 rounded-3xl p-12 border border-border/50">
            <h2 className="text-display-2 mb-6">Remote-First</h2>
            <p className="text-body-large text-muted-foreground mb-6">
              We're a distributed team working across multiple time zones to serve clients globally.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="px-4 py-2">
                🇺🇸 United States
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                🇪🇺 European Union
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                🌏 Asia Pacific
              </Badge>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
