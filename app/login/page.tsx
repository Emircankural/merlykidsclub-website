"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TreePine, Mail, Lock, ArrowLeft } from "lucide-react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Burada gerçek login işlemi yapılacak
    setTimeout(() => {
      setIsLoading(false)
      console.log("Login attempt:", { email, password })
    }, 1000)
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
            <CardTitle className="text-2xl font-bold text-green-900">Merlykidsclub'a Hoş Geldiniz</CardTitle>
            <p className="text-green-700 mt-2">Hesabınıza giriş yapın</p>
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
                    placeholder="ornek@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 border-green-200 focus:ring-green-500 focus:border-green-500"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-green-700">
                  <input type="checkbox" className="rounded border-green-300" />
                  Beni hatırla
                </label>
                <Link href="/forgot-password" className="text-green-600 hover:text-green-800">
                  Şifremi unuttum
                </Link>
              </div>

              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={isLoading}>
                {isLoading ? "Giriş yapılıyor..." : "Giriş Yap"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-green-700">
                Hesabınız yok mu?{" "}
                <Link href="/register" className="text-green-600 hover:text-green-800 font-semibold">
                  Kayıt olun
                </Link>
              </p>
            </div>

          </CardContent>
        </Card>

        <div className="mt-6 text-center text-sm text-green-600">
          <p>
            Giriş yaparak{" "}
            <Link href="/terms" className="underline hover:text-green-800">
              Kullanım Şartları
            </Link>{" "}
            ve{" "}
            <Link href="/privacy" className="underline hover:text-green-800">
              Gizlilik Politikası
            </Link>
            'nı kabul etmiş olursunuz.
          </p>
        </div>
      </div>
    </div>
  )
}
