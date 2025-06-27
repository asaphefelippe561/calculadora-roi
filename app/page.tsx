"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Calculator, TrendingUp, Users, Calendar, Eye, DollarSign } from "lucide-react"

export default function RevenueCalculator() {
  const [investment, setInvestment] = useState([10000])
  const [costPerLead, setCostPerLead] = useState([50])
  const [schedulingRate, setSchedulingRate] = useState([30])
  const [attendanceRate, setAttendanceRate] = useState([70])
  const [conversionRate, setConversionRate] = useState([20])
  const [averageTicket, setAverageTicket] = useState([2000])

  const [results, setResults] = useState({
    leads: 0,
    scheduled: 0,
    attended: 0,
    sales: 0,
    revenue: 0,
  })

  useEffect(() => {
    const leads = Math.floor(investment[0] / costPerLead[0])
    const scheduled = Math.floor(leads * (schedulingRate[0] / 100))
    const attended = Math.floor(scheduled * (attendanceRate[0] / 100))
    const sales = Math.floor(attended * (conversionRate[0] / 100))
    const revenue = sales * averageTicket[0]

    setResults({
      leads,
      scheduled,
      attended,
      sales,
      revenue,
    })
  }, [investment, costPerLead, schedulingRate, attendanceRate, conversionRate, averageTicket])

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value)
  }

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat("pt-BR").format(value)
  }

  return (
    <div className="min-h-screen bg-[#0F172A] text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-[#10B981] p-4 rounded-full">
              <Calculator className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Calculadora de <span className="text-[#10B981]">Faturamento</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Descubra quanto você pode faturar no mês aplicando nossa estrutura de vendas. Ajuste os parâmetros e veja os
            resultados em tempo real.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Inputs Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-[#10B981]" />
              Parâmetros da Estrutura
            </h2>

            {/* Investment */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader className="pb-3">
                <CardTitle className="text-white flex justify-between items-center">
                  <span>Investimento Mensal</span>
                  <span className="text-[#10B981]">{formatCurrency(investment[0])}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Slider
                  value={investment}
                  onValueChange={setInvestment}
                  max={100000}
                  min={1000}
                  step={500}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-400 mt-2">
                  <span>R$ 1.000</span>
                  <span>R$ 100.000</span>
                </div>
              </CardContent>
            </Card>

            {/* Cost per Lead */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader className="pb-3">
                <CardTitle className="text-white flex justify-between items-center">
                  <span>Custo por Lead</span>
                  <span className="text-[#10B981]">{formatCurrency(costPerLead[0])}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Slider
                  value={costPerLead}
                  onValueChange={setCostPerLead}
                  max={200}
                  min={10}
                  step={5}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-400 mt-2">
                  <span>R$ 10</span>
                  <span>R$ 200</span>
                </div>
              </CardContent>
            </Card>

            {/* Scheduling Rate */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader className="pb-3">
                <CardTitle className="text-white flex justify-between items-center">
                  <span>Taxa de Agendamento</span>
                  <span className="text-[#10B981]">{schedulingRate[0]}%</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Slider
                  value={schedulingRate}
                  onValueChange={setSchedulingRate}
                  max={100}
                  min={5}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-400 mt-2">
                  <span>5%</span>
                  <span>100%</span>
                </div>
              </CardContent>
            </Card>

            {/* Attendance Rate */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader className="pb-3">
                <CardTitle className="text-white flex justify-between items-center">
                  <span>Taxa de Comparecimento</span>
                  <span className="text-[#10B981]">{attendanceRate[0]}%</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Slider
                  value={attendanceRate}
                  onValueChange={setAttendanceRate}
                  max={100}
                  min={10}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-400 mt-2">
                  <span>10%</span>
                  <span>100%</span>
                </div>
              </CardContent>
            </Card>

            {/* Conversion Rate */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader className="pb-3">
                <CardTitle className="text-white flex justify-between items-center">
                  <span>Taxa de Conversão</span>
                  <span className="text-[#10B981]">{conversionRate[0]}%</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Slider
                  value={conversionRate}
                  onValueChange={setConversionRate}
                  max={100}
                  min={1}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-400 mt-2">
                  <span>1%</span>
                  <span>100%</span>
                </div>
              </CardContent>
            </Card>

            {/* Average Ticket */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader className="pb-3">
                <CardTitle className="text-white flex justify-between items-center">
                  <span>Ticket Médio</span>
                  <span className="text-[#10B981]">{formatCurrency(averageTicket[0])}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Slider
                  value={averageTicket}
                  onValueChange={setAverageTicket}
                  max={10000}
                  min={100}
                  step={100}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-400 mt-2">
                  <span>R$ 100</span>
                  <span>R$ 10.000</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <DollarSign className="w-6 h-6 text-[#10B981]" />
              Resultados Projetados
            </h2>

            {/* Revenue Highlight */}
            <Card className="bg-gradient-to-r from-[#10B981] to-[#059669] border-0">
              <CardHeader className="text-center">
                <CardTitle className="text-white text-lg">Faturamento Mensal</CardTitle>
                <div className="text-4xl font-bold text-white mt-2">{formatCurrency(results.revenue)}</div>
              </CardHeader>
            </Card>

            {/* Funnel Results */}
            <div className="space-y-4">
              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-[#10B981]" />
                      <span className="text-white">Leads Gerados</span>
                    </div>
                    <span className="text-2xl font-bold text-[#10B981]">{formatNumber(results.leads)}</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-[#10B981]" />
                      <span className="text-white">Agendamentos</span>
                    </div>
                    <span className="text-2xl font-bold text-[#10B981]">{formatNumber(results.scheduled)}</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Eye className="w-5 h-5 text-[#10B981]" />
                      <span className="text-white">Comparecimentos</span>
                    </div>
                    <span className="text-2xl font-bold text-[#10B981]">{formatNumber(results.attended)}</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <TrendingUp className="w-5 h-5 text-[#10B981]" />
                      <span className="text-white">Vendas Fechadas</span>
                    </div>
                    <span className="text-2xl font-bold text-[#10B981]">{formatNumber(results.sales)}</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* ROI Card */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-center">Retorno sobre Investimento</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-[#10B981]">
                  {((results.revenue / investment[0] - 1) * 100).toFixed(1)}%
                </div>
                <p className="text-gray-400 mt-2">
                  Para cada R$ 1 investido, você retorna R$ {(results.revenue / investment[0]).toFixed(2)}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-slate-700">
          <p className="text-gray-400">
            * Os resultados são projeções baseadas nos parâmetros informados e podem variar conforme a execução da
            estratégia.
          </p>
        </div>
      </div>
    </div>
  )
}
