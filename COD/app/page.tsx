"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Check,
  AlertCircle,
  TrendingUp,
  MessageCircle,
  Shield,
  Mail,
  ArrowRight,
  Zap,
  DollarSign,
  Rocket,
  Target,
  CheckCircle2,
} from "lucide-react"
import { useEffect, useState, useRef } from "react"

export default function LandingPage() {
  const whatsappNumber = "+923176881648"
  const email = "cod.revenue.recovery@gmail.com"
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=Hi%2C%20I%20want%20to%20book%20a%20free%20COD%20revenue%20audit%20for%20my%20Shopify%20store`
  const emailLink = `mailto:${email}?subject=COD%20Revenue%20Recovery%20Inquiry&body=Hi,%0D%0A%0D%0AI'm%20interested%20in%20learning%20more%20about%20the%20COD%20Revenue%20Recovery%20Sprint%20for%20my%20Shopify%20store.%0D%0A%0D%0AStore%20Details:%0D%0AStore%20Name:%0D%0AMonthly%20Revenue:%0D%0ACurrent%20COD%20Volume:%0D%0A%0D%0AThank%20you!`

  const [mounted, setMounted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setMounted(true)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.15, rootMargin: "0px 0px -100px 0px" },
    )

    document.querySelectorAll(".fade-up, .fade-in-left, .fade-in-right").forEach((el) => observer.observe(el))

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth > 768) {
        const x = (e.clientX / window.innerWidth - 0.5) * 30
        const y = (e.clientY / window.innerHeight - 0.5) * 30
        setMousePosition({ x, y })
      }
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
      const parallaxElements = document.querySelectorAll(".parallax")
      parallaxElements.forEach((el) => {
        const speed = Number.parseFloat(el.getAttribute("data-speed") || "0.5")
        ;(el as HTMLElement).style.transform = `translateY(${window.scrollY * speed}px)`
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)

    return () => {
      observer.disconnect()
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        {/* Primary gradient orbs with enhanced animations */}
        <div
          className="absolute -top-[20%] -right-[15%] h-[600px] w-[600px] rounded-full blur-[150px] animate-blob"
          style={{
            background:
              "radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, rgba(139, 92, 246, 0.3) 40%, transparent 70%)",
            transform: `translate(${mousePosition.x * 1.2}px, ${mousePosition.y * 1.2}px) translateY(${scrollY * 0.1}px)`,
            transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            animationDuration: "7s",
          }}
        />
        <div
          className="absolute top-1/4 -left-[10%] h-[700px] w-[700px] rounded-full blur-[140px] animate-blob animation-delay-2000"
          style={{
            background:
              "radial-gradient(circle, rgba(59, 130, 246, 0.35) 0%, rgba(6, 182, 212, 0.25) 40%, transparent 70%)",
            transform: `translate(${-mousePosition.x * 0.8}px, ${-mousePosition.y * 0.8}px) translateY(${scrollY * 0.15}px)`,
            transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            animationDuration: "9s",
          }}
        />
        <div
          className="absolute bottom-[10%] right-[20%] h-[500px] w-[500px] rounded-full blur-[120px] animate-blob animation-delay-4000"
          style={{
            background:
              "radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, rgba(236, 72, 153, 0.2) 40%, transparent 70%)",
            transform: `translate(${mousePosition.x * 0.6}px, ${mousePosition.y * 0.6}px) translateY(${scrollY * 0.08}px)`,
            transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            animationDuration: "8s",
          }}
        />

        <div className="absolute inset-0">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background:
                  i % 3 === 0
                    ? "rgba(99, 102, 241, 0.3)"
                    : i % 3 === 1
                      ? "rgba(59, 130, 246, 0.3)"
                      : "rgba(168, 85, 247, 0.3)",
                boxShadow: `0 0 ${Math.random() * 10 + 5}px currentColor`,
                animation: `float-particles ${Math.random() * 15 + 10}s ease-in-out infinite, pulse-particle ${Math.random() * 3 + 2}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(99, 102, 241, 0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(99, 102, 241, 0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            transform: `translateY(${scrollY * 0.3}px) perspective(1000px) rotateX(60deg)`,
            transformOrigin: "center top",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at center, transparent 0%, rgba(15, 23, 42, 0.8) 100%)",
          }}
        />
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative px-4 py-24 md:py-32 lg:py-40">
        <div
          className={`mx-auto max-w-6xl text-center transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-indigo-500/50 bg-indigo-500/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-xl shadow-2xl shadow-indigo-500/20 animate-pulse-glow hover:scale-105 hover:shadow-indigo-500/40 transition-all duration-500">
            <Zap className="h-5 w-5 text-yellow-400 animate-pulse" />
            <span className="bg-gradient-to-r from-white via-indigo-200 to-white bg-clip-text text-transparent">
              Results in 7-14 Days • $10K+ Revenue Guaranteed
            </span>
          </div>

          <h1 className="mb-8 text-5xl font-black tracking-tight md:text-7xl lg:text-8xl text-balance leading-[1.05]">
            <span className="block bg-gradient-to-r from-white via-indigo-200 to-white bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-flow drop-shadow-[0_0_40px_rgba(99,102,241,0.5)]">
              Stop Losing 20–30% of Your
            </span>
            <span className="block mt-2 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-flow-reverse drop-shadow-[0_0_50px_rgba(168,85,247,0.6)]">
              Cash on Delivery Revenue
            </span>
          </h1>

          <p className="mb-12 text-xl text-slate-300 md:text-2xl lg:text-3xl leading-relaxed text-balance max-w-4xl mx-auto font-light">
            We help Shopify brands recover lost COD revenue using{" "}
            <span className="font-bold text-white bg-indigo-500/20 px-3 py-1 rounded-lg border border-indigo-500/30 inline-block hover:bg-indigo-500/30 transition-colors">
              WhatsApp confirmation & checkout recovery
            </span>{" "}
            systems — results in 7–14 days.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-10">
            <Button
              asChild
              size="lg"
              className="group relative h-20 px-12 text-xl font-bold shadow-[0_0_50px_-12px_rgba(99,102,241,0.8)] hover:shadow-[0_0_80px_-12px_rgba(99,102,241,1)] transition-all duration-500 hover:scale-110 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 overflow-hidden border-0"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <MessageCircle className="mr-3 h-7 w-7 transition-transform group-hover:rotate-12 group-hover:scale-125 drop-shadow-lg" />
                <span className="relative drop-shadow-md">Book Free COD Revenue Audit</span>
                <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-3" />
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="group h-20 px-12 text-xl font-bold border-2 border-slate-600 hover:border-indigo-400 bg-slate-800/50 hover:bg-indigo-500/10 backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.5)] text-white"
            >
              <a href={emailLink}>
                <Mail className="mr-3 h-6 w-6 group-hover:scale-125 group-hover:rotate-6 transition-transform" />
                Email Us
              </a>
            </Button>
          </div>

          <p className="text-base text-slate-400 flex items-center justify-center gap-6 flex-wrap">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-green-400 transition-colors hover:scale-110 transform duration-300"
            >
              <MessageCircle className="h-5 w-5" />
              <span className="font-medium">{whatsappNumber}</span>
            </a>
            <span className="text-slate-700">•</span>
            <a
              href={emailLink}
              className="flex items-center gap-2 hover:text-indigo-400 transition-colors hover:scale-110 transform duration-300"
            >
              <Mail className="h-5 w-5" />
              <span className="font-medium">{email}</span>
            </a>
          </p>
        </div>

        <div
          className={`parallax mx-auto max-w-5xl mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          data-speed="0.05"
        >
          {[
            {
              label: "Revenue Recovered",
              value: "$10K+",
              icon: TrendingUp,
              gradient: "from-emerald-500 via-green-500 to-teal-500",
              shadowColor: "rgba(16, 185, 129, 0.5)",
            },
            {
              label: "Implementation Time",
              value: "7-14 Days",
              icon: Zap,
              gradient: "from-yellow-500 via-orange-500 to-red-500",
              shadowColor: "rgba(251, 191, 36, 0.5)",
            },
            {
              label: "Success Guarantee",
              value: "100%",
              icon: Shield,
              gradient: "from-blue-500 via-indigo-500 to-purple-500",
              shadowColor: "rgba(99, 102, 241, 0.5)",
            },
          ].map((stat, i) => (
            <Card
              key={i}
              className="group relative p-8 text-center backdrop-blur-xl bg-slate-800/50 border-slate-700/50 hover:border-indigo-500/50 transition-all duration-700 hover:scale-110 hover:-translate-y-4 overflow-hidden"
              style={{
                animationDelay: `${i * 150}ms`,
                boxShadow: `0 0 0 0 ${stat.shadowColor}`,
                transition: "all 0.7s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.7s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 25px 50px -12px ${stat.shadowColor}`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `0 0 0 0 ${stat.shadowColor}`
              }}
            >
              {/* Animated gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}
              />

              {/* Icon container with enhanced effects */}
              <div
                className={`relative mx-auto mb-5 h-16 w-16 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center group-hover:scale-125 group-hover:rotate-[360deg] transition-all duration-700 shadow-2xl`}
                style={{
                  boxShadow: `0 10px 40px -10px ${stat.shadowColor}`,
                }}
              >
                <stat.icon className="h-8 w-8 text-white drop-shadow-lg" />
              </div>

              <div className="text-5xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-500 drop-shadow-lg">
                {stat.value}
              </div>
              <div className="text-sm text-slate-400 font-semibold uppercase tracking-wider">{stat.label}</div>

              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-indigo-500/0 group-hover:border-indigo-500/50 transition-all duration-700 rounded-tl-2xl" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-indigo-500/0 group-hover:border-indigo-500/50 transition-all duration-700 rounded-br-2xl" />
            </Card>
          ))}
        </div>
      </section>

      {/* Pain Section */}
      <section className="relative px-4 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="fade-up text-center mb-20">
            <div className="inline-block mb-6 px-6 py-2 rounded-full bg-red-500/10 border border-red-500/30 backdrop-blur-xl">
              <span className="text-red-400 font-bold text-sm uppercase tracking-wider">Revenue Leaks Detected</span>
            </div>
            <h2 className="mb-6 text-5xl font-black text-white md:text-6xl lg:text-7xl text-balance leading-tight">
              Where Your COD Revenue Is{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent animate-gradient-flow drop-shadow-[0_0_30px_rgba(239,68,68,0.5)]">
                  Leaking
                </span>
                <svg
                  className="absolute -bottom-3 left-0 w-full"
                  height="12"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,6 Q25,12 50,6 T100,6"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    className="text-red-500 animate-pulse"
                  />
                </svg>
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              These silent profit killers are draining <span className="text-red-400 font-bold">thousands</span> from
              your bottom line every month
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 mb-12">
            {[
              {
                title: "Fake COD orders & wrong phone numbers",
                desc: "Wasting your ad spend on orders that will never convert into real revenue",
                stat: "25-30%",
                delay: "0ms",
              },
              {
                title: "Failed deliveries wasting ad spend",
                desc: "Burning money on customers who never intended to buy in the first place",
                stat: "15-20%",
                delay: "100ms",
              },
              {
                title: "Customers abandoning checkout",
                desc: "Losing ready-to-buy customers at the final step before purchase completion",
                stat: "40-50%",
                delay: "200ms",
              },
              {
                title: "No confirmation before dispatch",
                desc: "Shipping products to unverified addresses and phone numbers",
                stat: "20-25%",
                delay: "300ms",
              },
            ].map((pain, i) => (
              <Card
                key={i}
                className="fade-up group relative p-8 border-red-500/20 hover:border-red-500/50 transition-all duration-700 hover:scale-[1.03] hover:-translate-y-2 bg-slate-800/50 backdrop-blur-xl overflow-hidden"
                style={{
                  animationDelay: pain.delay,
                  boxShadow: "0 0 0 0 rgba(239, 68, 68, 0)",
                  transition: "all 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 25px 50px -12px rgba(239, 68, 68, 0.4)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 0 0 0 rgba(239, 68, 68, 0)"
                }}
              >
                {/* Animated warning stripe */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                <div className="relative flex items-start gap-5">
                  <div className="flex-shrink-0 mt-1 rounded-2xl bg-red-500/10 p-4 group-hover:bg-red-500/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border border-red-500/20">
                    <AlertCircle className="h-8 w-8 text-red-500" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="font-bold text-xl text-white leading-tight">{pain.title}</h3>
                      <span className="text-red-500 font-black text-2xl whitespace-nowrap drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]">
                        {pain.stat}
                      </span>
                    </div>
                    <p className="text-slate-400 text-base leading-relaxed">{pain.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="fade-up p-10 md:p-14 border-red-500/40 bg-gradient-to-br from-red-500/10 via-orange-500/10 to-yellow-500/10 backdrop-blur-xl hover:shadow-[0_0_80px_-20px_rgba(239,68,68,0.6)] transition-all duration-700 hover:scale-[1.02] overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/5 to-transparent animate-shimmer" />
            <p className="relative text-xl md:text-2xl lg:text-3xl text-center font-bold text-white leading-relaxed">
              <span className="inline-flex items-center gap-3 text-red-500 font-black text-2xl md:text-3xl lg:text-4xl mb-2 drop-shadow-[0_0_20px_rgba(239,68,68,0.5)]">
                <AlertCircle className="h-10 w-10 animate-pulse" />
                Reality check:
              </span>
              <br />
              If you're running COD ads, this is quietly costing you{" "}
              <span className="inline-block bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent font-black text-3xl md:text-4xl lg:text-5xl animate-gradient-flow drop-shadow-[0_0_30px_rgba(251,146,60,0.6)]">
                thousands every month
              </span>
              .
            </p>
          </Card>
        </div>
      </section>

      {/* Solution Section */}
      <section className="relative px-4 py-24 md:py-32 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent">
        <div className="mx-auto max-w-6xl">
          <div className="fade-up text-center mb-20">
            <div className="inline-block mb-6 px-6 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 backdrop-blur-xl">
              <span className="text-indigo-400 font-bold text-sm uppercase tracking-wider">The Solution</span>
            </div>
            <h2 className="mb-6 text-5xl font-black text-white md:text-6xl lg:text-7xl text-balance leading-tight">
              The COD Revenue{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-flow drop-shadow-[0_0_40px_rgba(168,85,247,0.6)]">
                Recovery Sprint
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              A proven system that plugs revenue leaks and recovers lost sales{" "}
              <span className="text-white font-bold">automatically</span>
            </p>
          </div>

          <div className="fade-up grid gap-8 md:grid-cols-2 mb-16">
            {[
              {
                title: "WhatsApp COD Order Confirmation",
                desc: "Automatically verify every order via WhatsApp before dispatch to ensure real customers",
                icon: MessageCircle,
                gradient: "from-green-500 via-emerald-500 to-teal-500",
                delay: "0ms",
              },
              {
                title: "Fake Order Filtering",
                desc: "AI-powered detection system to identify and block fraudulent orders before they cost you money",
                icon: Shield,
                gradient: "from-blue-500 via-indigo-500 to-purple-500",
                delay: "100ms",
              },
              {
                title: "Abandoned Checkout Recovery",
                desc: "Re-engage customers who left without completing purchase through strategic follow-ups",
                icon: TrendingUp,
                gradient: "from-purple-500 via-pink-500 to-rose-500",
                delay: "200ms",
              },
              {
                title: "COD Reconfirmation Before Dispatch",
                desc: "Final verification step to ensure delivery success and minimize return rates",
                icon: CheckCircle2,
                gradient: "from-orange-500 via-red-500 to-pink-500",
                delay: "300ms",
              },
            ].map((solution, i) => (
              <Card
                key={i}
                className="fade-in-left group relative p-8 border-indigo-500/20 hover:border-indigo-500/50 transition-all duration-700 hover:scale-[1.05] hover:-translate-y-3 bg-slate-800/50 backdrop-blur-xl overflow-hidden"
                style={{
                  animationDelay: solution.delay,
                  boxShadow: "0 0 0 0 rgba(99, 102, 241, 0)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 25px 50px -12px rgba(99, 102, 241, 0.5)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 0 0 0 rgba(99, 102, 241, 0)"
                }}
              >
                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}
                />

                <div className="relative flex items-start gap-5">
                  <div
                    className={`flex-shrink-0 mt-1 rounded-2xl bg-gradient-to-br ${solution.gradient} p-4 group-hover:scale-125 group-hover:rotate-[360deg] transition-all duration-700 shadow-2xl`}
                  >
                    <solution.icon className="h-8 w-8 text-white drop-shadow-lg" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-white mb-3 group-hover:text-indigo-300 transition-colors leading-tight">
                      {solution.title}
                    </h3>
                    <p className="text-slate-400 text-base leading-relaxed">{solution.desc}</p>
                  </div>
                </div>

                {/* Animated border effect */}
                <div className="absolute inset-0 rounded-xl border-2 border-indigo-500/0 group-hover:border-indigo-500/30 transition-all duration-700" />
              </Card>
            ))}
          </div>

          <Card className="fade-up p-12 md:p-16 bg-gradient-to-br from-indigo-500/20 via-purple-500/15 to-pink-500/20 border-indigo-500/40 backdrop-blur-xl relative overflow-hidden group hover:shadow-[0_0_100px_-20px_rgba(168,85,247,0.7)] transition-all duration-700 hover:scale-[1.02]">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500" />
            <p className="relative text-3xl md:text-4xl lg:text-5xl text-center font-black text-white leading-tight">
              This is not marketing. This is{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.8)]">
                  revenue recovery
                </span>
                <svg
                  className="absolute -bottom-3 left-0 w-full"
                  height="12"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,6 Q25,12 50,6 T100,6"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    className="text-purple-500 animate-pulse"
                  />
                </svg>
              </span>
              .
            </p>
          </Card>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="relative px-4 py-28 md:py-36">
        <div className="mx-auto max-w-4xl">
          <div className="fade-up relative">
            <Card className="relative p-12 md:p-16 lg:p-20 bg-gradient-to-br from-green-500/20 via-emerald-500/15 to-teal-500/20 border-green-500/50 backdrop-blur-xl overflow-hidden hover:shadow-[0_0_100px_-15px_rgba(16,185,129,0.8)] transition-all duration-700 hover:scale-[1.02]">
              {/* Animated background effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/10 to-transparent animate-shimmer" />
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent" />
              <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />

              {/* Badge */}
              <div className="relative text-center mb-8">
                <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-green-500/20 border-2 border-green-500/50 backdrop-blur-xl shadow-2xl shadow-green-500/30">
                  <Shield className="h-8 w-8 text-green-400 animate-pulse" />
                  <span className="text-green-300 font-black text-xl uppercase tracking-wider">
                    Risk-Free Guarantee
                  </span>
                </div>
              </div>

              <h2 className="relative text-center mb-10 text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
                Results{" "}
                <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(16,185,129,0.8)]">
                  Guaranteed
                </span>
              </h2>

              <div className="relative text-center space-y-8">
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-relaxed">
                  We guarantee at least{" "}
                  <span className="inline-block bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent text-4xl md:text-5xl lg:text-6xl font-black drop-shadow-[0_0_30px_rgba(16,185,129,0.8)]">
                    $10,000
                  </span>
                  <br />
                  in recovered COD revenue within{" "}
                  <span className="text-green-400 drop-shadow-[0_0_20px_rgba(16,185,129,0.6)]">14 days</span>.
                </p>

                <div className="inline-block p-8 rounded-2xl bg-slate-900/50 border-2 border-green-500/30 backdrop-blur-xl">
                  <p className="text-xl md:text-2xl font-semibold text-slate-300">
                    If we don't achieve this,{" "}
                    <span className="text-white font-black text-2xl md:text-3xl">you receive a full refund</span>.
                  </p>
                </div>

                <div className="flex items-center justify-center gap-4 pt-6">
                  <div className="h-20 w-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-2xl shadow-green-500/50 animate-pulse-slow">
                    <Check className="h-10 w-10 text-white font-bold" strokeWidth={4} />
                  </div>
                  <div className="text-left">
                    <div className="text-3xl font-black text-white">100% Risk-Free</div>
                    <div className="text-lg text-slate-400">Full money-back guarantee</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative px-4 py-24 md:py-32 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent">
        <div className="mx-auto max-w-6xl">
          <div className="fade-up text-center mb-20">
            <div className="inline-block mb-6 px-6 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 backdrop-blur-xl">
              <span className="text-purple-400 font-bold text-sm uppercase tracking-wider">Simple Process</span>
            </div>
            <h2 className="mb-6 text-5xl font-black text-white md:text-6xl lg:text-7xl text-balance leading-tight">
              How It{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent animate-gradient-flow drop-shadow-[0_0_40px_rgba(168,85,247,0.6)]">
                Works
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Three simple steps to recover your lost COD revenue
            </p>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500/20 via-pink-500/40 to-rose-500/20 -translate-y-1/2 z-0" />

            <div className="relative z-10 grid gap-12 md:grid-cols-3">
              {[
                {
                  step: "01",
                  title: "Free 10-Minute COD Revenue Audit",
                  desc: "We analyze your current COD process and identify exactly where you're losing money",
                  icon: Target,
                  gradient: "from-purple-500 to-purple-600",
                },
                {
                  step: "02",
                  title: "14-Day Recovery Sprint Implementation",
                  desc: "We implement our proven WhatsApp confirmation and recovery system into your Shopify store",
                  icon: Rocket,
                  gradient: "from-pink-500 to-pink-600",
                },
                {
                  step: "03",
                  title: "Recovered Revenue & Reporting",
                  desc: "Watch your recovered revenue grow with real-time tracking and detailed performance reports",
                  icon: DollarSign,
                  gradient: "from-rose-500 to-rose-600",
                },
              ].map((step, i) => (
                <div key={i} className="fade-up group relative" style={{ animationDelay: `${i * 150}ms` }}>
                  <Card className="relative h-full p-8 bg-slate-800/50 border-slate-700/50 hover:border-purple-500/50 backdrop-blur-xl transition-all duration-700 hover:scale-105 hover:-translate-y-4 overflow-hidden">
                    {/* Gradient background effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}
                    />

                    {/* Step number badge */}
                    <div className="relative mb-6 flex items-center justify-between">
                      <div className="text-7xl font-black text-slate-700/30 group-hover:text-purple-500/30 transition-colors duration-500">
                        {step.step}
                      </div>
                      <div
                        className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-2xl group-hover:scale-125 group-hover:rotate-[360deg] transition-all duration-700`}
                      >
                        <step.icon className="h-8 w-8 text-white" />
                      </div>
                    </div>

                    <h3 className="relative font-bold text-2xl text-white mb-4 leading-tight group-hover:text-purple-300 transition-colors">
                      {step.title}
                    </h3>
                    <p className="relative text-slate-400 text-base leading-relaxed">{step.desc}</p>

                    {/* Animated corner accents */}
                    <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-purple-500/0 group-hover:border-purple-500/50 transition-all duration-700 rounded-tr-2xl" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-purple-500/0 group-hover:border-purple-500/50 transition-all duration-700 rounded-bl-2xl" />
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Qualification Section */}
      <section className="relative px-4 py-24 md:py-32">
        <div className="mx-auto max-w-4xl">
          <Card className="fade-up p-12 md:p-16 bg-gradient-to-br from-slate-800/80 via-slate-800/60 to-slate-800/80 border-slate-700/50 backdrop-blur-xl relative overflow-hidden hover:shadow-[0_0_80px_-20px_rgba(99,102,241,0.5)] transition-all duration-700">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/5 to-transparent animate-shimmer" />

            {/* Header */}
            <div className="relative text-center mb-12">
              <div className="inline-block mb-6 px-6 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 backdrop-blur-xl">
                <span className="text-indigo-400 font-bold text-sm uppercase tracking-wider">
                  Qualification Criteria
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
                This Is{" "}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(99,102,241,0.6)]">
                  For You
                </span>{" "}
                If
              </h2>
            </div>

            {/* Checklist */}
            <div className="relative space-y-6 mb-12">
              {[
                "You run a Shopify store",
                "You use Cash on Delivery",
                "You do $30k+ per month",
                "You run Meta ads",
              ].map((item, i) => (
                <div
                  key={i}
                  className="group flex items-center gap-5 p-6 rounded-2xl bg-slate-900/50 border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-500 hover:translate-x-2"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Check className="h-7 w-7 text-white font-bold" strokeWidth={3} />
                  </div>
                  <span className="text-xl md:text-2xl font-bold text-white">{item}</span>
                </div>
              ))}
            </div>

            {/* Footer note */}
            <div className="relative p-8 rounded-2xl bg-slate-900/70 border-2 border-slate-700/50">
              <p className="text-lg md:text-xl text-center font-semibold text-slate-300">
                If this doesn't describe you, <span className="text-white font-bold">this service is not a fit</span>.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative px-4 py-32 md:py-40">
        <div className="mx-auto max-w-5xl">
          <Card className="fade-up relative p-16 md:p-20 lg:p-24 bg-gradient-to-br from-indigo-500/20 via-purple-500/15 to-pink-500/20 border-indigo-500/50 backdrop-blur-xl overflow-hidden hover:shadow-[0_0_120px_-20px_rgba(99,102,241,0.8)] transition-all duration-700">
            {/* Animated background layers */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent animate-shimmer" />
            <div className="absolute inset-0">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full bg-indigo-500/20"
                  style={{
                    width: `${Math.random() * 100 + 50}px`,
                    height: `${Math.random() * 100 + 50}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 5}s`,
                  }}
                />
              ))}
            </div>

            <div className="relative text-center space-y-10">
              {/* Headline */}
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-8">
                Ready to Recover Your{" "}
                <span className="block mt-2 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_50px_rgba(168,85,247,0.8)]">
                  Lost COD Revenue?
                </span>
              </h2>

              <p className="text-2xl md:text-3xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Book your free audit now and start recovering <span className="text-white font-bold">$10,000+</span> in
                the next 14 days
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                <Button
                  asChild
                  size="lg"
                  className="group relative h-24 px-16 text-2xl font-black shadow-[0_0_60px_-12px_rgba(99,102,241,1)] hover:shadow-[0_0_100px_-12px_rgba(99,102,241,1)] transition-all duration-500 hover:scale-110 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 overflow-hidden border-0"
                >
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    <MessageCircle className="mr-4 h-8 w-8 transition-transform group-hover:rotate-12 group-hover:scale-125" />
                    <span className="relative">Book Free Audit Now</span>
                    <ArrowRight className="ml-4 h-7 w-7 transition-transform group-hover:translate-x-3" />
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="group h-24 px-16 text-2xl font-bold border-2 border-slate-600 hover:border-indigo-400 bg-slate-800/50 hover:bg-indigo-500/10 backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_-5px_rgba(99,102,241,0.5)] text-white"
                >
                  <a href={emailLink}>
                    <Mail className="mr-4 h-7 w-7 group-hover:scale-125 group-hover:rotate-6 transition-transform" />
                    Email Us Instead
                  </a>
                </Button>
              </div>

              {/* Contact info */}
              <div className="pt-12 flex items-center justify-center gap-8 flex-wrap text-lg">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-400 hover:text-green-400 transition-colors hover:scale-110 transform duration-300"
                >
                  <div className="h-12 w-12 rounded-full bg-green-500/20 flex items-center justify-center">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <span className="font-bold">{whatsappNumber}</span>
                </a>
                <span className="text-slate-700 text-2xl">•</span>
                <a
                  href={emailLink}
                  className="flex items-center gap-3 text-slate-400 hover:text-indigo-400 transition-colors hover:scale-110 transform duration-300"
                >
                  <div className="h-12 w-12 rounded-full bg-indigo-500/20 flex items-center justify-center">
                    <Mail className="h-6 w-6" />
                  </div>
                  <span className="font-bold">{email}</span>
                </a>
              </div>

              {/* Trust badges */}
              <div className="pt-12 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
                {[
                  { icon: Shield, text: "100% Risk Free" },
                  { icon: Zap, text: "7-14 Days" },
                  { icon: DollarSign, text: "$10K+ Guaranteed" },
                ].map((badge, i) => (
                  <div key={i} className="text-center">
                    <div className="mx-auto mb-3 h-14 w-14 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-xl">
                      <badge.icon className="h-7 w-7 text-white" />
                    </div>
                    <div className="text-sm font-bold text-slate-300">{badge.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative px-4 py-12 border-t border-slate-800/50">
        <div className="mx-auto max-w-6xl">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-white">COD Revenue Recovery Sprint</h3>
            <p className="text-slate-400">
              Helping Shopify brands recover lost COD revenue through WhatsApp confirmation & checkout recovery systems
            </p>
            <div className="flex items-center justify-center gap-6 pt-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-green-400 transition-colors"
              >
                <MessageCircle className="h-6 w-6" />
              </a>
              <a href={emailLink} className="text-slate-400 hover:text-indigo-400 transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
            <p className="text-sm text-slate-600 pt-4">© 2025 COD Revenue Recovery Sprint. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
