"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Sparkles, Shirt, Heart, Zap, ChevronLeft, ChevronRight, TrendingUp } from "lucide-react"
import Image from "next/image"
import { Inter } from "next/font/google"


const inter = Inter({
  subsets: ["latin", "vietnamese"],
  display: "swap",
})

const APK_DOWNLOAD_URL = "https://expo.dev/artifacts/eas/vhLUrmZv1taSfsReWw6CYt.apk" // Replace with your actual APK URL

const features = [
  {
    icon: Sparkles,
    title: "AI Thông Minh",
    description: "Công nghệ AI tiên tiến gợi ý outfit phù hợp với phong cách của bạn",
  },
  {
    icon: Shirt,
    title: "Thời Trang Đa Dạng",
    description: "Hàng nghìn sản phẩm từ các thương hiệu nổi tiếng",
  },
  {
    icon: Heart,
    title: "Cá Nhân Hóa",
    description: "Học hỏi sở thích và đưa ra gợi ý phù hợp nhất",
  },
  {
    icon: TrendingUp,
    title: "Xu Hướng Mới",
    description: "Cập nhật những xu hướng thời trang mới nhất",
  },
]

const screenshots = [
  {
    id: 1,
    title: "Trang Chủ",
    image: "/placeholder.svg?height=600&width=300",
  },
  {
    id: 2,
    title: "AI Gợi Ý",
    image: "/placeholder.svg?height=600&width=300",
  },
  {
    id: 3,
    title: "Cửa Hàng",
    image: "/placeholder.svg?height=600&width=300",
  },
  {
    id: 4,
    title: "Hồ Sơ",
    image: "/placeholder.svg?height=600&width=300",
  },
]

// Floating stickers animation
const FloatingSticker = ({
  children,
  delay = 0,
  duration = 3,
}: { children: React.ReactNode; delay?: number; duration?: number }) => (
  <motion.div
    animate={{
      y: [-10, 10, -10],
      rotate: [-5, 5, -5],
    }}
    transition={{
      duration,
      repeat: Number.POSITIVE_INFINITY,
      delay,
      ease: "easeInOut",
    }}
    className="absolute"
  >
    {children}
  </motion.div>
)

export default function Component() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleDownloadAPK = () => {
    // You can add analytics tracking here before download
    // gtag('event', 'download', { file_name: 'formale-ai.apk' })

    window.open(APK_DOWNLOAD_URL, "_blank")
  }

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % screenshots.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % screenshots.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length)
  }

  return (
    <div className={`min-h-screen bg-white overflow-hidden ${inter.className}`}>
      {/* Floating Stickers - Distributed around sides */}
      {/* Left side stickers */}
      <FloatingSticker delay={0} duration={4}>
        <div className="fixed top-32 left-8 text-4xl opacity-20 z-0">✨</div>
      </FloatingSticker>
      <FloatingSticker delay={2} duration={4.5}>
        <div className="fixed top-96 left-12 text-3xl opacity-20 z-0">💫</div>
      </FloatingSticker>
      <FloatingSticker delay={0.5} duration={4.2}>
        <div className="fixed bottom-80 left-6 text-3xl opacity-20 z-0">👚</div>
      </FloatingSticker>
      <FloatingSticker delay={1.8} duration={3.8}>
        <div className="fixed bottom-32 left-16 text-4xl opacity-20 z-0">💎</div>
      </FloatingSticker>

      {/* Right side stickers */}
      <FloatingSticker delay={1} duration={3.5}>
        <div className="fixed top-48 right-10 text-3xl opacity-20 z-0">👗</div>
      </FloatingSticker>
      <FloatingSticker delay={1.5} duration={3.8}>
        <div className="fixed top-80 right-8 text-4xl opacity-20 z-0">🌟</div>
      </FloatingSticker>
      <FloatingSticker delay={2.5} duration={3.3}>
        <div className="fixed bottom-96 right-12 text-4xl opacity-20 z-0">✨</div>
      </FloatingSticker>
      <FloatingSticker delay={0.8} duration={4.1}>
        <div className="fixed bottom-48 right-6 text-3xl opacity-20 z-0">👠</div>
      </FloatingSticker>

      {/* Top and bottom center stickers */}
      <FloatingSticker delay={3} duration={3.6}>
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 text-2xl opacity-15 z-0">💄</div>
      </FloatingSticker>
      <FloatingSticker delay={1.2} duration={4.3}>
        <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 text-2xl opacity-15 z-0">👜</div>
      </FloatingSticker>

      {/* Additional corner stickers */}
      <FloatingSticker delay={2.2} duration={3.9}>
        <div className="fixed top-1/4 left-4 text-2xl opacity-15 z-0">🎀</div>
      </FloatingSticker>
      <FloatingSticker delay={1.7} duration={4.4}>
        <div className="fixed top-1/4 right-4 text-2xl opacity-15 z-0">💍</div>
      </FloatingSticker>
      <FloatingSticker delay={0.3} duration={3.7}>
        <div className="fixed bottom-1/4 left-4 text-2xl opacity-15 z-0">🕶️</div>
      </FloatingSticker>
      <FloatingSticker delay={2.8} duration={4.0}>
        <div className="fixed bottom-1/4 right-4 text-2xl opacity-15 z-0">👛</div>
      </FloatingSticker>

      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 p-6 border-b border-gray-100"
      >
        <nav className="flex items-center justify-between max-w-6xl mx-auto">
          <motion.div className="flex items-center space-x-2" whileHover={{ scale: 1.05 }}>
            <div className="w-10 h10 relative">
              <Image src="/images/Formale.png"
              alt="Formale Logo"
              width={40}  // Kích thước mong muốn, ví dụ 40px
              height={40} // Kích thước mong muốn, ví dụ 40px
             className="object-contain"
        />
              </div>
             <span className="text-2xl font-bold text-black">FormaleApp</span>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={handleDownloadAPK}
              className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-full"
            >
              Tải Ngay
            </Button>
          </motion.div>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h1
                className="text-5xl lg:text-7xl font-bold mb-6 vietnamese-text"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className="text-black">Ứng Dụng</span>
                <br />
                <span className="text-gray-600"> Gợi Ý Outfit Hoàn Hảo</span>
              </motion.h1>

              <motion.p
                className="text-xl text-gray-600 mb-8 leading-relaxed vietnamese-text"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Khám phá phong cách thời trang của bạn một cách tiện lợi. Tìm kiếm, mua sắm và tạo nên những bộ outfit tuyệt vời chỉ trong vài giây!
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 mb-8"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    onClick={handleDownloadAPK}
                    className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Tải APK Miễn Phí
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Phone Mockup with Screenshots Carousel */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative mx-auto w-80 h-[600px]">
                {/* Phone Frame */}
                <div className="absolute inset-0 bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative">
                    {/* Screenshot Carousel */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, x: 300 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -300 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={screenshots[currentSlide].image || "/placeholder.svg"}
                          alt={screenshots[currentSlide].title}
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <button
                      onClick={prevSlide}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>

                    {/* Dots Indicator */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                      {screenshots.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentSlide ? "bg-white" : "bg-white/50"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating Elements around Phone */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute -top-4 -right-4 w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Zap className="w-6 h-6 text-white" />
                </motion.div>

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute -bottom-4 -left-4 w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Heart className="w-5 h-5 text-white" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 px-6 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-black vietnamese-text">Tính Năng Nổi Bật</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trải nghiệm phối đồ và mua sắm thời trang hoàn toàn mới - ngay trong bàn tay bạn
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <Card className="p-6 h-full bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0 text-center">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4"
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800 vietnamese-text">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-800">Sẵn Sàng Khám Phá?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Tải xuống ngay để trải nghiệm ứng dụng gợi ý outfit thông minh nhất thị trường
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
              <Button
                onClick={handleDownloadAPK}
                className="bg-black hover:bg-gray-800 text-white px-12 py-6 rounded-full text-xl font-semibold shadow-2xl"
              >
                <Download className="w-6 h-6 mr-3" />
                Tải APK Miễn Phí
              </Button>
            </motion.div>

            <motion.p
              className="text-sm text-gray-500 mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              Tương thích với Android 6.0+ • Dung lượng: 25MB
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900 text-white px-6 py-12">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-2 mb-6"
          >
            <div className="w-10 h-10 relative">
+              <Image
                src="/images/Formale.png"
                alt="Formale Logo"
                 fill
               style={{ objectFit: "contain" }}
             />
           </div>
            <span className="text-2xl font-bold">FormaleApp</span>
          </motion.div>
          <p className="text-gray-400 mb-4">© 2024 Formale. All Rights reserved.</p>
          
        </div>
      </footer>
    </div>
  )
}
