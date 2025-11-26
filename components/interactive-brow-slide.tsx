"use client"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function InteractiveBrowSlide() {
  const [showMicrobladingInfo, setShowMicrobladingInfo] = useState(false)
  const [showMicroshadingInfo, setShowMicroshadingInfo] = useState(false)

  const showSummary = showMicrobladingInfo && showMicroshadingInfo

  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: "#DED8FD" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black text-gray-800 mb-8 tracking-wide leading-tight">
            La Différence Entre Les Deux Techniques
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Il n'y a pas beaucoup de différence entre ces deux techniques. Parfois, elles sont même combinées ensemble.
            Les deux servent à remplir les sourcils, mais de manières différentes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="text-center space-y-6">
            <h3 className="text-3xl font-serif text-purple-600 italic mb-6">Microblading</h3>

            <div className="relative w-full h-24 mb-6">
              <Image
                src="/images/microblading-example.png"
                alt="Technique microblading montrant des traits comme des poils"
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <p className="text-gray-800 text-base leading-relaxed mb-6">
              <strong>
                Regardez attentivement - vous voyez les petits traits individuels qui ressemblent à de vrais poils de
                sourcils.
              </strong>
            </p>

            <button
              onClick={() => setShowMicrobladingInfo(!showMicrobladingInfo)}
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-200 mb-4"
            >
              {showMicrobladingInfo ? "Masquer les détails" : "Plus d'infos"}
            </button>

            {showMicrobladingInfo && (
              <Card className="transition-all duration-300 animate-in slide-in-from-top">
                <CardContent className="p-6 bg-purple-800 text-white">
                  <div className="space-y-4 text-left text-sm">
                    <p>
                      <strong>Microblading = On dessine poil par poil</strong>
                    </p>
                    <p className="italic">C'est comme dessiner des cheveux avec un crayon fin</p>
                    <p>
                      <strong>Pour les clients:</strong> Veut des sourcils naturels → Microblading
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          <div className="text-center space-y-6">
            <h3 className="text-3xl font-serif text-purple-600 italic mb-6">Microshading</h3>

            <div className="relative w-full h-24 mb-6">
              <Image
                src="/images/microshading-example.png"
                alt="Technique microshading montrant un effet poudré"
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <p className="text-gray-800 text-base leading-relaxed mb-6">
              <strong>Ici, c'est plus uniforme et rempli, comme si on avait appliqué de la poudre à sourcils.</strong>
            </p>

            <button
              onClick={() => setShowMicroshadingInfo(!showMicroshadingInfo)}
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-200 mb-4"
            >
              {showMicroshadingInfo ? "Masquer les détails" : "Plus d'infos"}
            </button>

            {showMicroshadingInfo && (
              <Card className="transition-all duration-300 animate-in slide-in-from-top">
                <CardContent className="p-6 bg-purple-800 text-white">
                  <div className="space-y-4 text-left text-sm">
                    <p>
                      <strong>Microshading = On remplit avec de la couleur</strong>
                    </p>
                    <p className="italic">C'est comme colorier une zone avec un feutre</p>
                    <p>
                      <strong>Pour les clients:</strong> Veut des sourcils maquillés → Microshading
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {showSummary && (
          <div className="mt-16 text-center">
            <Card className="bg-white/80 backdrop-blur-sm transition-all duration-300 animate-in slide-in-from-bottom">
              <CardContent className="p-8">
                <h2 className="text-2xl font-serif text-purple-600 mb-6">EN UNE PHRASE:</h2>
                <p className="text-xl text-gray-800 font-medium">
                  Le microblading imite la nature, le microshading imite le maquillage.
                </p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
