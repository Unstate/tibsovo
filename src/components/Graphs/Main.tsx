import { useState } from 'react'
import CommonGraphsImage from './common/Graph'
import LongTimeGraphsImage from './long-time/Graph'
import NoProgressGraphsImage from './no-progress/Graph'
import CommonDescGraph from './common/Desc'
import LongTimeDescGraph from './long-time/Desc'
import NoProgressDescGraph from './no-progress/Desc'
import InfoIcon from '../InfoIcon'

const Graphs = () => {
  const [activeTab, setActiveTab] = useState<'common' |  'noProgress' | 'longTime'>('noProgress')

  const tabs = [
    { id: 'common' as const, label: 'Общая выживаемость' },
    { id: 'noProgress' as const, label: 'Выживаемость без прогрессии' },
    { id: 'longTime' as const, label: 'Пациенты с длительным ответом' },
  ]

  return (
    <div className="w-full max-w-full pt-0 md:pt-20 pb-1 px-2 md:px-4">
      <div className="mx-auto w-full max-w-[1360px] rounded-xl md:rounded-2xl bg-white overflow-hidden flex flex-col">
        {/* Content - Two columns */}
        <div className="flex flex-col lg:flex-row flex-1">
          {/* Left side - Stats */}
          <div className="flex-1 flex flex-col md:max-w-[68%] overflow-auto">
            {/* Header with tabs */}
            <div className="rounded-lg py-2 md:py-4 md:p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0">
              <div className="md:rounded-xl bg-white shadow-[0_0_20px_0_rgba(97,39,158,0.12)] p-2 md:p-1.5 flex flex-row items-center gap-2 overflow-x-auto md:overflow-visible w-full md:w-auto scrollbar-hide">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-3 md:px-4.5 md:py-3 rounded-lg text-xs md:text-sm font-semibold leading-[140%] transition-colors whitespace-nowrap flex-shrink-0 cursor-pointer ${
                      activeTab === tab.id
                        ? 'bg-[#61279E] text-white'
                        : 'text-[#151518]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              {/* Info Icon - visible on desktop only */}
              <div className="hidden md:block">
                <InfoIcon
                  size={24}
                  color="#636466"
                  opacity={0.5}
                  className="flex-shrink-0"
 text="Tibsovo. Инструкция по применению. Servier Pharmaceuticals LLC; 2023."
                />
              </div>
            </div>
            <div className="flex flex-col px-4 md:px-8 pb-4 md:py-[17px]">
              {activeTab === 'common' && <CommonGraphsImage />}
              {activeTab === 'longTime' && <LongTimeGraphsImage />}
              {activeTab === 'noProgress' && <NoProgressGraphsImage />}
            </div>
          </div>

          {activeTab === 'common' && <CommonDescGraph />}
          {activeTab === 'longTime' && <LongTimeDescGraph />}
          {activeTab === 'noProgress' && <NoProgressDescGraph />}
        </div>
      </div>
    </div>
  )
}

export default Graphs
