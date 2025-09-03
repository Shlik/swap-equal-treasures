import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, MessageSquare, Star, Trophy, Calendar, TrendingUp } from "lucide-react";

const Community = () => {
  const stats = [
    { icon: Users, label: "Active Members", value: "25,000+", color: "text-primary" },
    { icon: MessageSquare, label: "Messages Today", value: "1,200+", color: "text-secondary" },
    { icon: Star, label: "Average Rating", value: "4.8/5", color: "text-accent" },
    { icon: Trophy, label: "Successful Swaps", value: "50,000+", color: "text-primary" }
  ];

  const features = [
    {
      icon: MessageSquare,
      title: "Discussion Forums",
      description: "Connect with fellow swappers, share tips, and get advice from the community."
    },
    {
      icon: Calendar,
      title: "Local Events",
      description: "Join swap meets and community events happening in your area."
    },
    {
      icon: TrendingUp,
      title: "Trending Items",
      description: "Discover what's popular in your community and find inspiration for your next swap."
    },
    {
      icon: Trophy,
      title: "Leaderboards",
      description: "See top swappers in your area and earn recognition for your trading activity."
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Join the <span className="text-primary">SwapSpace</span> Community
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Connect with thousands of swappers worldwide. Share experiences, discover trending items, 
            and build lasting relationships through the art of trading.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-hero">Join Community</button>
            <button className="btn-secondary">Browse Forums</button>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted/50 mb-4">
                    <IconComponent className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Community Features */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Community Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover all the ways you can engage with the SwapSpace community
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Community Guidelines
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">Be Respectful</h3>
              <p className="text-muted-foreground">
                Treat all community members with kindness and respect. We're all here to help each other find great swaps.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">Stay Safe</h3>
              <p className="text-muted-foreground">
                Always meet in public places for swaps and trust your instincts. Report any suspicious activity to our moderators.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">Be Honest</h3>
              <p className="text-muted-foreground">
                Provide accurate descriptions and photos of your items. Honesty builds trust and makes better swaps for everyone.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">Have Fun</h3>
              <p className="text-muted-foreground">
                Swapping should be enjoyable! Share your success stories and help others discover the joy of trading.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Community;