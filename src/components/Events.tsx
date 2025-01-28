import { GitBranch, KeyRound, GamepadIcon, Calendar, MapPin, Users } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const Events = () => {
  const events = [
    {
      title: "Git Cryptex",
      description: "A two-stage challenge testing your Git & GitHub skills! Solve an open-source crossword puzzle, then use the answers to complete exciting GitHub tasks. Perfect for team collaboration and learning version control.",
      date: "26th February 2025",
      venue: "Main Conference Hall",
      teamSize: "Team of 2",
      icon: GitBranch,
      status: "Registration Open",
      color: "from-blue-500/20 to-purple-500/20",
      registrationLink: "https://forms.google.com/git-cryptex-registration"
    },
    {
      title: "Decipher",
      description: "Race against time in this thrilling scavenger hunt! Decrypt mysterious messages and challenge other teams by creating your own encryptions. A perfect blend of problem-solving and collaborative competition.",
      date: "27th February 2025",
      venue: "Auditorium B",
      teamSize: "Team of 2",
      icon: KeyRound,
      status: "Registration Closed",
      color: "from-amber-500/20 to-red-500/20",
      registrationLink: "https://forms.google.com/decipher-registration"
    },
    {
      title: "Odyssey",
      description: "An exciting solo adventure through increasingly challenging puzzles! Use logic and built-in tools to conquer each level. Race to become the ultimate Conqueror in this two-day brain-teasing journey.",
      date: "26th-27th February 2025",
      venue: "Workshop Rooms 1-3",
      teamSize: "Individual",
      icon: GamepadIcon,
      status: "Registration Open",
      color: "from-emerald-500/20 to-cyan-500/20",
      registrationLink: "https://forms.google.com/odyssey-registration"
    }
  ];

  const handleRegistration = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <section id="events" className="section-padding bg-gradient-to-b from-warmWhite to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy text-center mb-16 animate-fade-up">
          Featured Events
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {events.map((event, index) => (
            <div 
              key={index}
              className="relative overflow-hidden rounded-2xl bg-white/90 backdrop-blur-sm border border-white/20 p-8 group hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-50`} />
              
              <div className="relative z-10 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-6">
                  <event.icon className="w-10 h-10 text-coral group-hover:scale-110 transition-transform" />
                  <Badge 
                    variant="outline"
                    className={`${
                      event.status === "Registration Open" 
                        ? "border-green-500 text-green-700" 
                        : "border-red-500 text-red-700"
                    }`}
                  >
                    {event.status}
                  </Badge>
                </div>

                <h3 className="text-xl font-bold text-navy mb-3">{event.title}</h3>
                <p className="text-softBlack/80 mb-6 flex-grow">
                  {event.description}
                </p>

                <div className="space-y-3 text-sm text-softBlack/70 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{event.venue}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{event.teamSize}</span>
                  </div>
                </div>

                <Button 
                  onClick={() => handleRegistration(event.registrationLink)}
                  disabled={event.status === "Registration Closed"}
                  className={`w-full transition-all duration-300 ${
                    event.status === "Registration Open"
                      ? "bg-gradient-to-r from-coral to-coral/90 text-white hover:from-coral/90 hover:to-coral"
                      : "bg-gray-100 text-gray-400 cursor-not-allowed hover:bg-gray-100"
                  }`}
                >
                  {event.status === "Registration Open" ? "Register Now" : "Registration Closed"}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
