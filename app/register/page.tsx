"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TreePine, Mail, Lock, User, Phone, ArrowLeft, Calendar } from "lucide-react"

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    childAge: "",
    agreeTerms: false,
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Form validation
    if (formData.password !== formData.confirmPassword) {
      alert("Şifreler eşleşmiyor!")
      setIsLoading(false)
      return
    }

    if (!formData.agreeTerms) {
      alert("Kullanım şartlarını kabul etmelisiniz!")
      setIsLoading(false)
      return
    }

    // Burada gerçek kayıt işlemi yapılacak
    setTimeout(() => {
      setIsLoading(false)
      console.log("Registration attempt:", formData)
      alert("Kayıt başarılı! Giriş sayfasına yönlendiriliyorsunuz.")
      // Gerçek uygulamada buradan login sayfasına yönlendirme yapılacak
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back to Home Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-green-700 hover:text-green-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Ana Sayfaya Dön
        </Link>

        <Card className="border-green-200 shadow-lg">
          <CardHeader className="text-center pb-6">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                <TreePine className="w-8 h-8 text-white" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold text-green-900">Merlykidsclub'a Katılın</CardTitle>
            <p className="text-green-700 mt-2">Yeni hesap oluşturun</p>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-green-900">
                  Ad Soyad
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-green-500" />
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Adınız ve soyadınız"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="pl-10 border-green-200 focus:ring-green-500 focus:border-green-500"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-green-900">
                  E-posta Adresi
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-green-500" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="ornek@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="pl-10 border-green-200 focus:ring-green-500 focus:border-green-500"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-green-900">
                  Telefon Numarası
                </Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-green-500" />
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="0555 123 45 67"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="pl-10 border-green-200 focus:ring-green-500 focus:border-green-500"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="childAge" className="text-green-900">
                  Çocuğunuzun Yaşı
                </Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-4 w-4 text-green-500" />
                  <Input
                    id="childAge"
                    name="childAge"
                    type="number"
                    placeholder="Örn: 5"
                    min="2"
                    max="12"
                    value={formData.childAge}
                    onChange={handleInputChange}
                    className="pl-10 border-green-200 focus:ring-green-500 focus:border-green-500"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-green-900">
                  Şifre
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-green-500" />
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="En az 6 karakter"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="pl-10 border-green-200 focus:ring-green-500 focus:border-green-500"
                    minLength={6}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-green-900">
                  Şifre Tekrar
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-green-500" />
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Şifrenizi tekrar girin"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="pl-10 border-green-200 focus:ring-green-500 focus:border-green-500"
                    minLength={6}
                    required
                  />
                </div>
              </div>

              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="agreeTerms"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleInputChange}
                  className="mt-1 rounded border-green-300"
                  required
                />
                <label htmlFor="agreeTerms" className="text-sm text-green-700">
                  <Link href="/terms" className="text-green-600 hover:text-green-800 underline">
                    Kullanım Şartları
                  </Link>{" "}
                  ve{" "}
                  <Link href="/privacy" className="text-green-600 hover:text-green-800 underline">
                    Gizlilik Politikası
                  </Link>
                  'nı okudum ve kabul ediyorum.
                </label>
              </div>

              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={isLoading}>
                {isLoading ? "Kayıt oluşturuluyor..." : "Kayıt Ol"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-green-700">
                Zaten hesabınız var mı?{" "}
                <Link href="/login" className="text-green-600 hover:text-green-800 font-semibold">
                  Giriş yapın
                </Link>
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-green-100">
              <div className="text-center">
                <p className="text-sm text-green-600 mb-3">Sosyal medya ile kayıt ol</p>
                <div className="flex gap-3 justify-center">
                  <Button variant="outline" className="flex-1 border-green-200 bg-transparent">
                    Google
                  </Button>
                  <Button variant="outline" className="flex-1 border-green-200 bg-transparent">
                    Facebook
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
