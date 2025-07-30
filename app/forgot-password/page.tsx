"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TreePine, Mail, ArrowLeft, CheckCircle, AlertCircle } from "lucide-react"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isEmailSent, setIsEmailSent] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // E-posta format kontrolü
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError("Geçerli bir e-posta adresi girin.")
      setIsLoading(false)
      return
    }

    // Burada gerçek şifre sıfırlama e-postası gönderme işlemi yapılacak
    setTimeout(() => {
      setIsLoading(false)
      setIsEmailSent(true)
      console.log("Password reset email sent to:", email)
    }, 2000)
  }

  const handleResendEmail = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      console.log("Password reset email resent to:", email)
    }, 1000)
  }

  if (isEmailSent) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 text-green-700 hover:text-green-900 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Giriş Sayfasına Dön
          </Link>

          <Card className="border-green-200 shadow-lg">
            <CardHeader className="text-center pb-6">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold text-green-900">E-posta Gönderildi!</CardTitle>
              <p className="text-green-700 mt-2">Şifre sıfırlama talimatları e-posta adresinize gönderildi</p>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800 text-sm">
                  <strong>{email}</strong> adresine şifre sıfırlama bağlantısı gönderdik. E-posta kutunuzu kontrol edin.
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-sm text-green-700">E-posta gelmedi mi?</p>
                <ul className="text-sm text-green-600 space-y-1 ml-4">
                  <li>• Spam/gereksiz e-posta klasörünüzü kontrol edin</li>
                  <li>• E-posta adresinizi doğru yazdığınızdan emin olun</li>
                  <li>• Birkaç dakika bekleyin, bazen gecikmeli gelebilir</li>
                </ul>
              </div>

              <div className="flex flex-col gap-3">
                <Button
                  onClick={handleResendEmail}
                  variant="outline"
                  className="w-full border-green-200 text-green-700 hover:bg-green-50 bg-transparent"
                  disabled={isLoading}
                >
                  {isLoading ? "Gönderiliyor..." : "E-postayı Tekrar Gönder"}
                </Button>

                <Link href="/login" className="w-full">
                  <Button className="w-full bg-green-600 hover:bg-green-700">Giriş Sayfasına Dön</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back to Login Link */}
        <Link
          href="/login"
          className="inline-flex items-center gap-2 text-green-700 hover:text-green-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Giriş Sayfasına Dön
        </Link>

        <Card className="border-green-200 shadow-lg">
          <CardHeader className="text-center pb-6">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                <TreePine className="w-8 h-8 text-white" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold text-green-900">Şifremi Unuttum</CardTitle>
            <p className="text-green-700 mt-2">E-posta adresinizi girin, size şifre sıfırlama bağlantısı gönderelim</p>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-green-900">
                  E-posta Adresi
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-green-500" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Kayıtlı e-posta adresiniz"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 border-green-200 focus:ring-green-500 focus:border-green-500"
                    required
                  />
                </div>
              </div>

              {error && (
                <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 rounded-lg p-3">
                  <AlertCircle className="w-4 h-4" />
                  <span className="text-sm">{error}</span>
                </div>
              )}

              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={isLoading}>
                {isLoading ? "Gönderiliyor..." : "Şifre Sıfırlama Bağlantısı Gönder"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-green-700 text-sm">
                Şifrenizi hatırladınız mı?{" "}
                <Link href="/login" className="text-green-600 hover:text-green-800 font-semibold">
                  Giriş yapın
                </Link>
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-green-100">
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <h4 className="font-semibold text-amber-800 mb-2">💡 İpucu</h4>
                <p className="text-sm text-amber-700">
                  Güvenli bir şifre oluşturmak için en az 8 karakter kullanın ve büyük harf, küçük harf, rakam ve özel
                  karakter kombinasyonu tercih edin.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 text-center text-sm text-green-600">
          <p>
            Sorun mu yaşıyorsunuz?{" "}
            <Link href="/contact" className="underline hover:text-green-800">
              Bizimle iletişime geçin
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
