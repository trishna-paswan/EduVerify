// src/components/FeatureCard.tsx
export default function FeatureCard({ title, desc, icon }: { title: string; desc: string; icon?: React.ReactNode }) {
  return (
    <div className="feature-card bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl p-6">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center">
          {icon ? icon : <svg className="w-6 h-6 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 6v6l4 2"/></svg>}
        </div>
        <div>
          <h3 className="text-white text-lg font-semibold">{title}</h3>
          <p className="mt-1 text-sm text-gray-300">{desc}</p>
        </div>
      </div>
    </div>
  );
}
