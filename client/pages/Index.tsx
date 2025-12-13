import { Button } from "@/components/ui/button";
import { CheckCircle2, CheckCircle, MoreVertical, Share2 } from "lucide-react";

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
  productImage: "https://images.unsplash.com/photo-1580959375944-abd7e991f971?w=400&h=400&fit=crop",
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
  { name: "BRCGS", color: "bg-blue-600" },
  { name: "IFS", color: "bg-blue-600" },
  { name: "ISO", color: "bg-blue-600" },
  { name: "HACCP", color: "bg-green-600" },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Mobile Header */}
      <header className="sticky top-0 z-50 bg-navy text-white px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-cyan rounded-full"></div>
          <span className="font-semibold text-sm">ATLANTIDA</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2">
            <Share2 size={18} />
          </button>
          <button className="p-2">
            <MoreVertical size={18} />
          </button>
        </div>
      </header>

      <main className="pb-6">
        {/* SECTION 1: Header & Immediate Trust */}
        <section className="bg-navy text-white px-4 py-8">
          <div className="space-y-4">
            <h1 className="text-2xl font-bold leading-tight">
              Traceability Report:<br />
              <span className="text-cyan">Ελληνική Τσιπούρα</span>
            </h1>
            
            <div className="space-y-1">
              <p className="text-sm font-semibold text-cyan-light">
                {mockData.productName} | Lot No: {mockData.lotNumber}
              </p>
              <p className="text-xs text-cyan-light">
                Processing Quality guaranteed by
              </p>
              <p className="font-semibold text-sm">
                {mockData.company}
              </p>
            </div>

            {/* Certification Logos */}
            <div className="pt-6 border-t border-cyan-light/30">
              <p className="text-xs font-semibold text-cyan-light mb-3">
                Πιστοποιήσεις & Πιστοποιήσεις
              </p>
              <div className="grid grid-cols-4 gap-2">
                {certifications.map((cert) => (
                  <div
                    key={cert.name}
                    className={`${cert.color} rounded-lg p-3 flex items-center justify-center min-h-[60px]`}
                  >
                    <span className="text-white text-xs font-bold text-center">
                      {cert.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Product Image */}
        <section className="px-4 py-6 bg-gray-50 border-b border-gray-200">
          <img
            src={mockData.productImage}
            alt={mockData.productName}
            className="w-full h-auto rounded-lg object-cover"
          />
        </section>

        {/* SECTION 2: Traceability Data Block */}
        <section className="px-4 py-6 space-y-4">
          <h2 className="text-lg font-bold text-navy">
            Προέλευση
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between items-start pb-3 border-b border-gray-200">
              <span className="text-sm font-medium text-gray-600">
                Product Name
              </span>
              <span className="text-sm font-semibold text-navy text-right">
                {mockData.productName}
              </span>
            </div>
            
            <div className="flex justify-between items-start pb-3 border-b border-gray-200">
              <span className="text-sm font-medium text-gray-600">
                Origin Method
              </span>
              <span className="text-sm font-semibold text-navy text-right">
                {mockData.originMethod}
              </span>
            </div>

            <div className="flex justify-between items-start pb-3 border-b border-gray-200">
              <span className="text-sm font-medium text-gray-600">
                Geographic Origin
              </span>
              <span className="text-sm font-semibold text-navy text-right">
                {mockData.geographicOrigin}
              </span>
            </div>

            <div className="flex justify-between items-start pb-3 border-b border-gray-200">
              <span className="text-sm font-medium text-gray-600">
                Harvest Date
              </span>
              <span className="text-sm font-semibold text-navy text-right">
                {mockData.harvestDate}
              </span>
            </div>

            <div className="flex justify-between items-start pb-3 border-b border-gray-200">
              <span className="text-sm font-medium text-gray-600">
                Processing Date
              </span>
              <span className="text-sm font-semibold text-navy text-right">
                {mockData.processingDate}
              </span>
            </div>

            <div className="flex justify-between items-start">
              <span className="text-sm font-medium text-gray-600">
                Best Before Date
              </span>
              <span className="text-sm font-semibold text-navy text-right">
                {mockData.bestBeforeDate}
              </span>
            </div>
          </div>
        </section>

        {/* SECTION 3: Technical Specifications */}
        <section className="px-4 py-6 bg-gray-50 border-t border-b border-gray-200 space-y-4">
          <h2 className="text-lg font-bold text-navy">
            Τεχνικά Προδιαγραφές
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between items-start pb-3 border-b border-gray-200">
              <span className="text-sm font-medium text-gray-600">
                Size Grade
              </span>
              <span className="text-sm font-semibold text-navy text-right">
                {mockData.sizeGrade}
              </span>
            </div>

            <div className="flex justify-between items-start pb-3 border-b border-gray-200">
              <span className="text-sm font-medium text-gray-600">
                Format
              </span>
              <span className="text-sm font-semibold text-navy text-right">
                {mockData.format}
              </span>
            </div>

            <div className="flex justify-between items-start pb-3 border-b border-gray-200">
              <span className="text-sm font-medium text-gray-600">
                Freezing Type
              </span>
              <span className="text-sm font-semibold text-navy text-right">
                {mockData.freezingType}
              </span>
            </div>

            <div className="flex justify-between items-start pb-3 border-b border-gray-200">
              <span className="text-sm font-medium text-gray-600">
                Glaze Percentage
              </span>
              <span className="text-sm font-semibold text-navy text-right">
                {mockData.glazePercentage}
              </span>
            </div>

            <div className="flex justify-between items-start">
              <span className="text-sm font-medium text-gray-600">
                Certification Status
              </span>
              <span className="text-sm font-semibold text-navy text-right">
                {mockData.certificationStatus}
              </span>
            </div>
          </div>

          {/* Compliance Indicators */}
          <div className="pt-4 space-y-2 border-t border-gray-300 mt-4">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-green-600" />
              <span className="text-xs text-gray-700">Food Safety</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-600" />
              <span className="text-xs text-gray-700">Valid until 2026</span>
            </div>
          </div>
        </section>

        {/* SECTION 4: Call to Action */}
        <section className="px-4 py-6 space-y-3">
          <Button
            className="w-full bg-navy hover:bg-navy-light text-white font-semibold py-6 text-base"
            onClick={() => alert("Contact Sales for Bulk Order")}
          >
            Εξειδικευμένη για Συνεργασία Επιχειρήσεων B2B
          </Button>
          
          <Button
            variant="outline"
            className="w-full border-navy text-navy hover:bg-gray-50 font-semibold py-6 text-base"
            onClick={() => alert("View Full Product Catalog")}
          >
            View Full Product Catalog
          </Button>

          <div className="pt-2 text-center">
            <a
              href="#"
              className="text-sm text-cyan font-semibold hover:underline"
            >
              More Info
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
