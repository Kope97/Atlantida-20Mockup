import { Button } from "@/components/ui/button";
import { CheckCircle2, CheckCircle, Menu, X, Share2, MoreVertical } from "lucide-react";
import { useState } from "react";

interface TraceabilityData {
  productName: string;
  lotNumber: string;
  company: string;
  productImage: string;
  originMethod: string;
  geographicOrigin: string;
  harvestDate: string;
  processingDate: string;
  bestBeforeDate: string;
  sizeGrade: string;
  format: string;
  freezingType: string;
  glazePercentage: string;
  certificationStatus: string;
}

const mockData: TraceabilityData = {
  productName: "Greek Seabream",
  lotNumber: "GR-TS-1210",
  company: "ATLANTIDA S.A. TOURNAVITIS",
  productImage: "https://images.unsplash.com/photo-1517457373614-b7152f800fd1?w=500&h=500&fit=crop",
  originMethod: "Farmed / Aquaculture",
  geographicOrigin: "Euboea, Greece",
  harvestDate: "10/12/2025",
  processingDate: "11/12/2025",
  bestBeforeDate: "10/12/2027",
  sizeGrade: "400-600g",
  format: "Whole, Gutted, Frozen",
  freezingType: "IQF",
  glazePercentage: "<5%",
  certificationStatus: "ATLANTIDA S.A. Kavala",
};

const certifications = [
  { name: "BRCGS", color: "bg-blue-500" },
  { name: "IFS", color: "bg-blue-500" },
  { name: "ISO", color: "bg-blue-500" },
  { name: "HACCP", color: "bg-green-500" },
];

const navItems = [
  { label: "Dashboard", active: true },
  { label: "Reports" },
  { label: "Analytics" },
  { label: "Traceability" },
  { label: "Certifications" },
  { label: "Settings" },
];

export default function Index() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Mobile Header */}
      <header className="lg:hidden sticky top-0 z-40 bg-gray-950 border-b border-gray-800 px-4 py-3 flex items-center justify-between">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
        >
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-cyan rounded-full"></div>
          <span className="font-semibold text-sm">ATLANTIDA</span>
        </div>
        <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
          <MoreVertical size={20} />
        </button>
      </header>

      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside
          className={`fixed lg:relative top-0 left-0 h-screen bg-gray-950 border-r border-gray-800 w-64 z-30 transform transition-transform duration-300 lg:transform-none
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
        >
          <div className="p-6 border-b border-gray-800">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-cyan rounded-lg"></div>
              <span className="font-bold">ATLANTIDA</span>
            </div>
          </div>

          <nav className="p-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                  item.active
                    ? "bg-gray-800 text-cyan font-semibold"
                    : "text-gray-400 hover:bg-gray-800"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          {/* Desktop Header */}
          <header className="hidden lg:flex sticky top-0 z-20 bg-gray-950 border-b border-gray-800 px-8 py-4 items-center justify-between">
            <h1 className="text-xl font-bold">Traceability Report</h1>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
                <Share2 size={20} />
              </button>
              <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
                <MoreVertical size={20} />
              </button>
            </div>
          </header>

          {/* Close sidebar overlay on mobile when clicking content */}
          {sidebarOpen && (
            <div
              className="fixed inset-0 bg-black/50 z-20 lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />
          )}

          <div className="p-4 lg:p-8 space-y-6">
            {/* Product Header Section */}
            <section className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="space-y-4">
                <div>
                  <h2 className="text-3xl font-bold leading-tight mb-2">
                    Traceability Report:<br />
                    <span className="text-cyan">Ελληνική Τσιπούρα</span>
                  </h2>
                  <p className="text-gray-400">
                    {mockData.productName} | Lot No: {mockData.lotNumber}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-400 mb-1">Processing Quality guaranteed by</p>
                  <p className="font-semibold text-lg">{mockData.company}</p>
                </div>

                {/* Certification Logos */}
                <div className="pt-4 border-t border-gray-700">
                  <p className="text-xs font-semibold text-gray-400 mb-4">
                    Πιστοποιήσεις & Πιστοποιήσεις
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {certifications.map((cert) => (
                      <div
                        key={cert.name}
                        className={`${cert.color} rounded-lg p-4 flex items-center justify-center min-h-[70px] text-white text-sm font-bold text-center`}
                      >
                        {cert.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Product Image */}
            <section className="bg-gray-800 rounded-lg p-6 border border-gray-700 overflow-hidden">
              <img
                src={mockData.productImage}
                alt={mockData.productName}
                className="w-full h-auto rounded-lg object-cover"
              />
            </section>

            {/* Traceability Data Block */}
            <section className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-2xl font-bold text-cyan mb-6">Προέλευση</h3>
              <div className="space-y-4">
                {[
                  { label: "Product Name", value: mockData.productName },
                  { label: "Origin Method", value: mockData.originMethod },
                  { label: "Geographic Origin", value: mockData.geographicOrigin },
                  { label: "Harvest Date", value: mockData.harvestDate },
                  { label: "Processing Date", value: mockData.processingDate },
                  { label: "Best Before Date", value: mockData.bestBeforeDate },
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-start pb-4 border-b border-gray-700 last:border-b-0">
                    <span className="text-sm font-medium text-gray-400">{item.label}</span>
                    <span className="text-sm font-semibold text-white text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Technical Specifications */}
            <section className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-2xl font-bold text-cyan mb-6">Τεχνικά Προδιαγραφές</h3>
              <div className="space-y-4">
                {[
                  { label: "Size Grade", value: mockData.sizeGrade },
                  { label: "Format", value: mockData.format },
                  { label: "Freezing Type", value: mockData.freezingType },
                  { label: "Glaze Percentage", value: mockData.glazePercentage },
                  { label: "Certification Status", value: mockData.certificationStatus },
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-start pb-4 border-b border-gray-700 last:border-b-0">
                    <span className="text-sm font-medium text-gray-400">{item.label}</span>
                    <span className="text-sm font-semibold text-white text-right">{item.value}</span>
                  </div>
                ))}
              </div>

              {/* Compliance Indicators */}
              <div className="pt-6 space-y-3 border-t border-gray-700 mt-6">
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-green-400" />
                  <span className="text-sm text-gray-300">Food Safety</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-green-400" />
                  <span className="text-sm text-gray-300">Valid until 2026</span>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="space-y-3 pb-6">
              <Button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-6 text-base transition-colors"
                onClick={() => alert("Contact Sales for Bulk Order")}
              >
                Εξειδικευμένη για Συνεργασία Επιχειρήσεων B2B
              </Button>

              <Button
                variant="outline"
                className="w-full border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white font-semibold py-6 text-base transition-colors"
                onClick={() => alert("View Full Product Catalog")}
              >
                View Full Product Catalog
              </Button>

              <div className="text-center pt-2">
                <a
                  href="#"
                  className="text-sm text-cyan font-semibold hover:text-cyan-light transition-colors"
                >
                  More Info
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
