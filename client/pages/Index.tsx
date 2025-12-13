import { Button } from "@/components/ui/button";
import { CheckCircle2, Menu, X, Share2, MoreVertical, Award } from "lucide-react";
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
  processingLocation: string;
  originStatus: string;
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
  processingLocation: "ATLANTIDA S.A., Kavala",
  originStatus: "Εγκεκριμένος / GLOBALG.A.P.",
};

const certifications = [
  { name: "BRCGS", icon: "🏆" },
  { name: "IFS", icon: "✓" },
  { name: "ISO 22000", icon: "⚙" },
  { name: "HACCP", icon: "🛡" },
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
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Mobile Header */}
      <header className="lg:hidden sticky top-0 z-40 bg-navy text-white border-b border-gray-200 px-4 py-3 flex items-center justify-between shadow-sm">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 hover:bg-navy-light rounded-lg transition-colors"
        >
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-cyan rounded-full flex-shrink-0"></div>
          <span className="font-bold text-base">ATLANTIDA</span>
        </div>
        <button className="p-2 hover:bg-navy-light rounded-lg transition-colors">
          <MoreVertical size={20} />
        </button>
      </header>

      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside
          className={`fixed lg:relative top-0 left-0 h-screen bg-navy text-white w-64 z-30 transform transition-transform duration-300 lg:transform-none shadow-lg
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
        >
          <div className="p-6 border-b border-navy-light">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-cyan rounded-lg flex-shrink-0"></div>
              <span className="font-bold text-lg">ATLANTIDA</span>
            </div>
          </div>

          <nav className="p-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                  item.active
                    ? "bg-cyan text-navy font-semibold"
                    : "text-gray-200 hover:bg-navy-light"
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
          <header className="hidden lg:flex sticky top-0 z-20 bg-navy text-white border-b border-gray-200 px-8 py-4 items-center justify-between shadow-sm">
            <h1 className="text-2xl font-bold">Traceability Report</h1>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-navy-light rounded-lg transition-colors">
                <Share2 size={20} />
              </button>
              <button className="p-2 hover:bg-navy-light rounded-lg transition-colors">
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

          <div className="p-4 lg:p-8 space-y-6 max-w-6xl mx-auto">
            {/* Product Header Section */}
            <section className="bg-white rounded-lg p-6 lg:p-8 border border-gray-200 shadow-sm">
              <div className="space-y-6">
                {/* Title and Lot Number */}
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-3 text-navy">
                    Traceability Report:<br />
                    <span className="text-cyan block mt-1">Ελληνική Τσιπούρα</span>
                  </h2>
                  <p className="text-lg font-semibold text-navy">
                    {mockData.productName} | <span className="font-bold">Lot No: {mockData.lotNumber}</span>
                  </p>
                </div>

                {/* Company and Quality Statement */}
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600 font-medium mb-2">Processing Quality guaranteed by</p>
                  <p className="text-lg font-bold text-navy">{mockData.company}</p>
                </div>

                {/* Certification Logos - Clean Design */}
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-5">
                    Πιστοποιήσεις & Παραδοχές
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                    {certifications.map((cert) => (
                      <div
                        key={cert.name}
                        className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:border-cyan transition-colors bg-gray-50"
                      >
                        <div className="text-3xl mb-2">{cert.icon}</div>
                        <span className="text-xs font-bold text-center text-gray-700">{cert.name}</span>
                      </div>
                    ))}
                  </div>

                  {/* Professional Processing Statement */}
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-cyan">
                    <p className="text-sm text-gray-700 leading-relaxed font-medium">
                      Η επεξεργασία του προϊόντος έγινε στις εγκαταστάσεις της Καβάλας, με πιστοποίηση BRCGS και συμμόρφωση με όλες τις διεθνείς νόρμες ασφαλείας τροφίμων.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Product Image */}
            <section className="bg-white rounded-lg p-6 lg:p-8 border border-gray-200 shadow-sm overflow-hidden">
              <img
                src={mockData.productImage}
                alt={mockData.productName}
                className="w-full h-auto rounded-lg object-cover"
              />
            </section>

            {/* Traceability Data Block - Origin & Timeline */}
            <section className="bg-white rounded-lg p-6 lg:p-8 border border-gray-200 shadow-sm">
              <h3 className="text-2xl lg:text-3xl font-bold text-navy mb-1 pb-3 border-b-2 border-cyan inline-block">
                Προέλευση
              </h3>

              <div className="mt-6 space-y-0">
                {[
                  { label: "Όνομα Προϊόντος", value: mockData.productName },
                  { label: "Μέθοδος Προέλευσης", value: mockData.originMethod },
                  { label: "Γεωγραφική Προέλευση", value: mockData.geographicOrigin },
                  { label: "Ημερομηνία Συγκομιδής", value: mockData.harvestDate },
                  { label: "Ημερομηνία Επεξεργασίας", value: mockData.processingDate },
                  { label: "Ημερομηνία Λήξης", value: mockData.bestBeforeDate },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center py-4 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 px-2 rounded transition-colors"
                  >
                    <span className="text-sm font-bold text-navy min-w-fit">{item.label}</span>
                    <span className="text-sm font-medium text-gray-700 text-right ml-4">{item.value}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Technical Specifications */}
            <section className="bg-white rounded-lg p-6 lg:p-8 border border-gray-200 shadow-sm">
              <h3 className="text-2xl lg:text-3xl font-bold text-navy mb-1 pb-3 border-b-2 border-cyan inline-block">
                Τεχνικές Προδιαγραφές
              </h3>

              <div className="mt-6 space-y-0">
                {[
                  { label: "Κατηγορία Μεγέθους", value: mockData.sizeGrade },
                  { label: "Μορφή Προϊόντος", value: mockData.format },
                  { label: "Τύπος Κατάψυξης", value: mockData.freezingType },
                  { label: "Ποσοστό Γλάζας", value: mockData.glazePercentage },
                  { label: "Εγκατάσταση Επεξεργασίας", value: mockData.processingLocation },
                  { label: "Κατάσταση Προέλευσης", value: mockData.originStatus },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center py-4 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 px-2 rounded transition-colors"
                  >
                    <span className="text-sm font-bold text-navy min-w-fit">{item.label}</span>
                    <span className="text-sm font-medium text-gray-700 text-right ml-4">{item.value}</span>
                  </div>
                ))}
              </div>

              {/* Compliance Indicators */}
              <div className="pt-6 mt-6 space-y-3 border-t border-gray-200">
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-green-600 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700">Food Safety Certified</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-green-600 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700">Valid until December 2026</span>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="space-y-4 pb-8">
              <Button
                className="w-full bg-navy hover:bg-navy-light text-white font-bold py-7 text-base lg:text-lg rounded-lg shadow-md transition-all hover:shadow-lg"
                onClick={() => alert("Redirecting to B2B Sales Contact")}
              >
                Επικοινωνία για Παραγγελία Χονδρικής
              </Button>

              <Button
                className="w-full bg-white text-navy border-2 border-navy font-bold py-7 text-base lg:text-lg rounded-lg hover:bg-gray-50 transition-all"
                onClick={() => alert("Redirecting to Product Catalog")}
              >
                Προβολή Πλήρους Καταλόγου Προϊόντων
              </Button>

              <div className="text-center pt-2">
                <a
                  href="#"
                  className="text-sm font-semibold text-navy hover:text-cyan transition-colors underline"
                >
                  Περισσότερες Πληροφορίες
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
