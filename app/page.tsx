"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Leaf, Star, Phone, Mail, MapPin, TreePine, Smile, Shield, Instagram } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-green-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <TreePine className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-green-800">Merlykidsclub</h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#hakkimizda" className="text-green-700 hover:text-green-900 transition-colors">
                Hakkımızda
              </a>
              <a href="#hizmetler" className="text-green-700 hover:text-green-900 transition-colors">
                Hizmetlerimiz
              </a>
              <a href="#iletisim" className="text-green-700 hover:text-green-900 transition-colors">
                İletişim
              </a>
            </nav>
            <Link href="/login">
              <Button className="bg-green-600 hover:bg-green-700">Bize Katılın</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-green-100 text-green-800 hover:bg-green-200">🌿 Doğa ile Buluşma Zamanı</Badge>
          <h2 className="text-5xl md:text-6xl font-bold text-green-900 mb-6">
            Çocuklar İçin
            <span className="block text-amber-600">Doğal Keşif</span>
          </h2>
          <p className="text-xl text-green-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Klinik psikolog ve aile danışmanı rehberliğinde, çocuklarınızın doğayla buluştuğu, serbest oyun ve
            yaratıcılıkla dolu güvenli bir alan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/login">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3">
                <Heart className="w-5 h-5 mr-2" />
                Hemen Başlayın
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-50 text-lg px-8 py-3 bg-transparent"
            >
              Daha Fazla Bilgi
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-green-900 mb-3">Güvenli Rehberlik</h3>
                <p className="text-green-700">
                  Klinik psikolog ve aile danışmanından oluşan profesyonel ekibimizle güvenli bir ortam.
                </p>
              </CardContent>
            </Card>
            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-green-900 mb-3">Doğayla Buluşma</h3>
                <p className="text-green-700">
                  Açık hava, toprak, ağaçlar ve doğanın tüm güzellikleriyle çocuklarınız keşfediyor.
                </p>
              </CardContent>
            </Card>
            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smile className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold text-green-900 mb-3">Serbest Oyun</h3>
                <p className="text-green-700">
                  Yaratıcılık, serbest oyun ve bolca kahkaha ile çocukların doğal gelişimini destekliyoruz.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="hakkimizda" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-amber-100 text-amber-800">Bizim Hikayemiz</Badge>
              <h2 className="text-4xl font-bold text-green-900 mb-6">Çocukların Dilinden Anlayan Bir Ekip</h2>
              <p className="text-green-700 text-lg mb-6 leading-relaxed">
                Merlykidsclub olarak, sadece çocuklara değil ailelere de alan açıyoruz. "Oyun arkadaşı" olmayı bilen,
                çocukların dilinden anlayan profesyonel ekibimizle buradayız.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-900">Yaş Grubu Uyumlu Gruplar</h4>
                    <p className="text-green-700">Her yaş grubuna uygun küçük kaşif grupları</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <Heart className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-900">Aile Odaklı Yaklaşım</h4>
                    <p className="text-green-700">Ebeveynlere dolaylı rehberlik ve destek</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-900">Gelişim Desteği</h4>
                    <p className="text-green-700">Çocukların doğal gelişimini destekleyen aktiviteler</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-green-200 to-amber-200 rounded-3xl flex items-center justify-center">
                <div className="text-center">
                  <TreePine className="w-24 h-24 text-green-600 mx-auto mb-4" />
                  <p className="text-green-800 font-semibold text-lg">Doğayla Büyüyen</p>
                  <p className="text-green-800 font-semibold text-lg">Mutlu Çocuklar</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-300 rounded-full flex items-center justify-center">
                <span className="text-2xl">🌻</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-300 rounded-full flex items-center justify-center">
                <span className="text-xl">🦋</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="hizmetler" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800">Neler Yapıyoruz</Badge>
            <h2 className="text-4xl font-bold text-green-900 mb-6">Doğa Temelli Etkinliklerimiz</h2>
            <p className="text-xl text-green-700 max-w-2xl mx-auto">
              Çocuklarınızın gelişimini destekleyen, eğlenceli ve öğretici doğa etkinlikleri
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-green-200 hover:shadow-lg transition-all hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="text-xl font-semibold text-green-900 mb-3">Doğa Keşfi</h3>
                <p className="text-green-700">Ağaçlar, toprak ve doğal yaşamla etkileşim kurarak keşfetme yolculuğu</p>
              </CardContent>
            </Card>
            <Card className="border-green-200 hover:shadow-lg transition-all hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-xl font-semibold text-green-900 mb-3">Yaratıcı Atölyeler</h3>
                <p className="text-green-700">
                  Doğal malzemelerle sanat ve el becerilerini geliştiren yaratıcı çalışmalar
                </p>
              </CardContent>
            </Card>
            <Card className="border-green-200 hover:shadow-lg transition-all hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🤸</span>
                </div>
                <h3 className="text-xl font-semibold text-green-900 mb-3">Serbest Oyun</h3>
                <p className="text-green-700">Çocukların hayal gücünü geliştiren, özgür ve güvenli oyun alanları</p>
              </CardContent>
            </Card>
            <Card className="border-green-200 hover:shadow-lg transition-all hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">👨‍👩‍👧‍👦</span>
                </div>
                <h3 className="text-xl font-semibold text-green-900 mb-3">Aile Rehberliği</h3>
                <p className="text-green-700">Ebeveynlere çocuk gelişimi konusunda profesyonel destek ve rehberlik</p>
              </CardContent>
            </Card>
            <Card className="border-green-200 hover:shadow-lg transition-all hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🧠</span>
                </div>
                <h3 className="text-xl font-semibold text-green-900 mb-3">Gelişim Desteği</h3>
                <p className="text-green-700">Klinik psikolog eşliğinde çocukların sosyal ve duygusal gelişimi</p>
              </CardContent>
            </Card>
            <Card className="border-green-200 hover:shadow-lg transition-all hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🌈</span>
                </div>
                <h3 className="text-xl font-semibold text-green-900 mb-3">Grup Etkinlikleri</h3>
                <p className="text-green-700">Yaş grubuna uygun sosyalleşme ve işbirliği geliştiren grup oyunları</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="iletisim" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-amber-100 text-amber-800">Bizimle İletişime Geçin</Badge>
            <h2 className="text-4xl font-bold text-green-900 mb-6">Çocuğunuz İçin İlk Adımı Atın</h2>
            <p className="text-xl text-green-700 max-w-2xl mx-auto">
              Sorularınız için bize ulaşın, çocuğunuzun doğayla buluşma yolculuğuna birlikte başlayalım
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-green-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-green-900 mb-6">İletişim Bilgileri</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-green-900">Telefon</p>
                      <p className="text-green-700">+90 (XXX) XXX XX XX</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-green-900">E-posta</p>
                      <p className="text-green-700">info@merlykidsclub.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-green-900">Konum</p>
                      <p className="text-green-700">Doğa ile iç içe güvenli alanlarımız</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div
                      onClick={() => window.open("https://instagram.com/merlykidsclub", "_blank")}
                      className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center cursor-pointer hover:bg-pink-200 transition-colors"
                    >
                      <Instagram className="w-6 h-6 text-pink-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-pink-900">Bizi Takip Edin</p>
                      <p className="text-pink-700">Instagram hesabımızdan güncel paylaşımlar</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-green-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-green-900 mb-6">Bize Yazın</h3>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-green-900 mb-2">Adınız</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Adınızı girin"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-green-900 mb-2">Çocuğunuzun Yaşı</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Yaş"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-green-900 mb-2">E-posta</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="E-posta adresiniz"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-green-900 mb-2">Mesajınız</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Sorularınızı ve merak ettiklerinizi yazın..."
                    ></textarea>
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700">Mesaj Gönder</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <TreePine className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">merlykidsclub</h3>
              </div>
              <p className="text-green-200">Çocukların doğayla buluştuğu, güvenli ve eğlenceli bir keşif yolculuğu.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Hızlı Linkler</h4>
              <ul className="space-y-2 text-green-200">
                <li>
                  <a href="#hakkimizda" className="hover:text-white transition-colors">
                    Hakkımızda
                  </a>
                </li>
                <li>
                  <a href="#hizmetler" className="hover:text-white transition-colors">
                    Hizmetlerimiz
                  </a>
                </li>
                <li>
                  <a href="#iletisim" className="hover:text-white transition-colors">
                    İletişim
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">İletişim</h4>
              <ul className="space-y-2 text-green-200">
                <li>info@merlykidsclub.com</li>
                <li>+90 (XXX) XXX XX XX</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-green-800 mt-8 pt-8 text-center text-green-200">
            <p>&copy; 2025 merlykidsclub. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
