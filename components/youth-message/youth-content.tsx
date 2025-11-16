'use client'

import { Download, Globe, Languages } from 'lucide-react'
import { useState } from 'react'

export default function YouthContent() {
  const [activeTab, setActiveTab] = useState<'english' | 'hindi'>('english')

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Language Toggle */}
        <div className="mb-12 flex justify-center gap-4">
          <button
            onClick={() => setActiveTab('english')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all ${
              activeTab === 'english'
                ? 'bg-primary text-white shadow-lg scale-105'
                : 'bg-card text-foreground hover:bg-primary/10'
            }`}
          >
            <Globe size={20} />
            English Version
          </button>
          <button
            onClick={() => setActiveTab('hindi')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all ${
              activeTab === 'hindi'
                ? 'bg-primary text-white shadow-lg scale-105'
                : 'bg-card text-foreground hover:bg-primary/10'
            }`}
          >
            <Languages size={20} />
            हिंदी संस्करण
          </button>
        </div>

        {/* Message Document */}
        <article className="bg-card rounded-xl shadow-2xl overflow-hidden">
          
          {/* Document Header */}
          <header className="bg-gradient-to-r from-primary to-primary/80 text-white p-8 sm:p-12">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 px-6 py-2 rounded-full mb-6">
                <span className="text-secondary text-4xl">✉️</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold mb-3">
                {activeTab === 'english' ? 'MESSAGE TO THE YOUTH OF BIHAR' : 'बिहार के युवाओं के लिए संदेश'}
              </h1>
              <p className="text-xl text-white/90">
                {activeTab === 'english' 
                  ? 'From the Desk of the Founding Leader — Ashwani Kumar' 
                  : 'संस्थापक नेता के डेस्क से — अश्वनी'}
              </p>
            </div>
          </header>

          {/* Document Body */}
          <div className="p-8 sm:p-12 bg-white">
            
            {activeTab === 'english' ? (
              // ENGLISH VERSION
              <div className="prose prose-lg max-w-none">
                
                {/* Opening */}
                <section className="mb-12 border-l-4 border-secondary pl-6">
                  <h2 className="text-2xl font-bold text-primary mb-4">Dear Youth of Bihar,</h2>
                  <p className="text-foreground leading-relaxed text-lg">
                    You are the <strong className="text-primary">strength</strong>, the <strong className="text-primary">energy</strong>, and the <strong className="text-primary">future</strong> of our state.
                  </p>
                  <p className="text-foreground leading-relaxed text-lg mt-4">
                    Bihar's history is filled with knowledge, courage, and leadership — but today, our youth face challenges that should not exist.
                  </p>
                </section>

                {/* Challenges */}
                <section className="mb-12 bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-primary mb-4">The Challenges You Face:</h3>
                  <ul className="space-y-2 text-foreground">
                    <li>❌ Limited job opportunities</li>
                    <li>❌ Lack of quality education</li>
                    <li>❌ Migration to other states</li>
                    <li>❌ Political systems that overlook young voices</li>
                    <li>❌ Corruption that blocks real talent</li>
                    <li>❌ Absence of modern leadership</li>
                  </ul>
                  <p className="text-lg font-bold text-primary mt-6">
                    This cycle must end. And <span className="text-secondary">you</span> are the only ones who can end it.
                  </p>
                </section>

                {/* You Deserve */}
                <section className="mb-12">
                  <h2 className="text-2xl font-bold text-primary mb-6 pb-2 border-b-2 border-secondary">
                    You Deserve a New Bihar
                  </h2>
                  <p className="text-foreground leading-relaxed text-lg mb-4">A Bihar where:</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                      <p className="font-semibold text-foreground">✓ Your talent matters</p>
                    </div>
                    <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                      <p className="font-semibold text-foreground">✓ Your hard work is rewarded</p>
                    </div>
                    <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                      <p className="font-semibold text-foreground">✓ Your dreams don't require leaving home</p>
                    </div>
                    <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                      <p className="font-semibold text-foreground">✓ Your voice shapes government policies</p>
                    </div>
                    <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                      <p className="font-semibold text-foreground">✓ Your future is built with dignity</p>
                    </div>
                    <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                      <p className="font-semibold text-foreground">✓ Leaders are chosen by merit, not money</p>
                    </div>
                  </div>
                  <p className="text-lg text-center font-semibold text-secondary mt-6 bg-secondary/10 p-4 rounded-lg">
                    This is the Bihar we are working to build through BVP.
                  </p>
                </section>

                {/* Why Youth Matter */}
                <section className="mb-12 bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-xl">
                  <h2 className="text-2xl font-bold text-primary mb-4">Why the Youth Matter Most</h2>
                  <p className="text-lg font-bold text-primary mb-4">
                    More than 60% of Bihar's population is below 35.
                  </p>
                  <p className="text-foreground leading-relaxed text-lg mb-4">
                    This is not a statistic — it is a <strong className="text-secondary">revolution waiting to happen</strong>.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center mt-6">
                    {['🦁 Brave', '💡 Innovative', '💎 Honest', '💪 Hardworking', '🚀 Future-oriented'].map((trait, i) => (
                      <span key={i} className="bg-white px-4 py-2 rounded-full font-semibold text-primary shadow-sm">
                        {trait}
                      </span>
                    ))}
                  </div>
                  <p className="text-foreground leading-relaxed text-lg mt-6 text-center italic">
                    But without a system that supports them, even the brightest minds fade.
                  </p>
                  <p className="text-xl font-bold text-center text-secondary mt-4">
                    BVP exists to change the system, not just participate in it.
                  </p>
                </section>

                {/* New Political Culture */}
                <section className="mb-12">
                  <h2 className="text-2xl font-bold text-primary mb-6 pb-2 border-b-2 border-secondary">
                    A New Political Culture — Built For You
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">For the first time in Indian politics, BVP brings:</p>
                  
                  <div className="space-y-4">
                    <div className="bg-card p-6 rounded-lg border-l-4 border-primary">
                      <h3 className="font-bold text-primary text-lg mb-2">✔ BPSC-style exam for political candidates</h3>
                      <p className="text-foreground">So only capable, honest leaders rise.</p>
                    </div>
                    <div className="bg-card p-6 rounded-lg border-l-4 border-secondary">
                      <h3 className="font-bold text-primary text-lg mb-2">✔ Merit over money</h3>
                      <p className="text-foreground">Your hard work matters more than political connections.</p>
                    </div>
                    <div className="bg-card p-6 rounded-lg border-l-4 border-primary">
                      <h3 className="font-bold text-primary text-lg mb-2">✔ Youth-first policies</h3>
                      <p className="text-foreground">Education, jobs, skill development, digital empowerment.</p>
                    </div>
                    <div className="bg-card p-6 rounded-lg border-l-4 border-secondary">
                      <h3 className="font-bold text-primary text-lg mb-2">✔ Transparent governance</h3>
                      <p className="text-foreground">No corruption, no backdoor politics.</p>
                    </div>
                  </div>

                  <div className="mt-8 bg-secondary/10 border-2 border-secondary/30 p-6 rounded-lg text-center">
                    <p className="text-lg font-semibold text-foreground">
                      You are not just <span className="text-primary">"voters."</span>
                    </p>
                    <p className="text-xl font-bold text-primary mt-2">
                      You are future policymakers, administrators, and leaders.
                    </p>
                  </div>
                </section>

                {/* My Promise */}
                <section className="mb-12 bg-gradient-to-br from-primary to-primary/90 text-white p-8 rounded-xl">
                  <h2 className="text-2xl font-bold mb-6 text-center">My Promise to You</h2>
                  <p className="text-lg font-semibold mb-6 text-center">I, Ashwani Kumar, give you my personal commitment:</p>
                  
                  <div className="space-y-3">
                    <p className="flex items-start gap-3"><span className="text-secondary text-xl">•</span> I will fight for your opportunities.</p>
                    <p className="flex items-start gap-3"><span className="text-secondary text-xl">•</span> I will stand for your dreams.</p>
                    <p className="flex items-start gap-3"><span className="text-secondary text-xl">•</span> I will protect your rights.</p>
                    <p className="flex items-start gap-3"><span className="text-secondary text-xl">•</span> I will open doors for your leadership.</p>
                    <p className="flex items-start gap-3"><span className="text-secondary text-xl">•</span> I will challenge old political systems that block your growth.</p>
                  </div>

                  <div className="mt-6 text-center space-y-2">
                    <p className="text-xl font-bold text-secondary">You deserve more.</p>
                    <p className="text-lg">And together, we will achieve more.</p>
                  </div>
                </section>

                {/* Join Movement */}
                <section className="mb-12">
                  <h2 className="text-2xl font-bold text-primary mb-6 text-center">Join the Youth Movement</h2>
                  <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-xl border-2 border-primary/20 text-center">
                    <p className="text-xl text-foreground mb-6 leading-relaxed">
                      This is not just a political party.<br />
                      This is a <strong className="text-primary">youth-led transformation movement</strong>.
                    </p>
                    <p className="text-lg text-muted-foreground mb-4">If you believe in:</p>
                    <div className="flex flex-wrap gap-3 justify-center mb-6">
                      {['💎 Honesty', '🎯 Merit', '🏗️ Development', '🚀 New leadership', '❤️ A better Bihar'].map((value, i) => (
                        <span key={i} className="bg-white px-4 py-2 rounded-full font-semibold text-primary shadow-sm border border-primary/20">
                          {value}
                        </span>
                      ))}
                    </div>
                    <p className="text-xl font-bold text-primary">Then BVP is your home.</p>
                  </div>
                </section>

                {/* Call to Action */}
                <section className="bg-gradient-to-r from-secondary to-primary text-white p-10 rounded-xl text-center">
                  <p className="text-4xl mb-4">🔥</p>
                  <div className="space-y-3 mb-8">
                    <p className="text-3xl font-bold">Rise.</p>
                    <p className="text-3xl font-bold">Lead.</p>
                    <p className="text-3xl font-bold">Build a new Bihar.</p>
                  </div>
                  <p className="text-2xl font-bold mb-8">Your time is now.</p>
                  <a 
                    href="/join" 
                    className="inline-flex items-center gap-2 bg-white text-primary hover:bg-white/90 px-10 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 shadow-xl"
                  >
                    Join BVP Youth Wing
                  </a>
                </section>

                {/* Signature */}
                <div className="mt-12 text-right">
                  <p className="text-xl font-bold text-primary">— Ashwani Kumar</p>
                  <p className="text-muted-foreground">Founding Leader</p>
                  <p className="text-muted-foreground">Bihar Vikas Party</p>
                </div>

              </div>
            ) : (
              // HINDI VERSION
              <div className="prose prose-lg max-w-none">
                
                {/* Opening */}
                <section className="mb-12 border-l-4 border-secondary pl-6">
                  <h2 className="text-2xl font-bold text-primary mb-4">प्रिय बिहार के युवाओं,</h2>
                  <p className="text-foreground leading-relaxed text-lg">
                    आप हमारे राज्य की <strong className="text-primary">शक्ति</strong>, <strong className="text-primary">ऊर्जा</strong> और <strong className="text-primary">भविष्य</strong> हैं।
                  </p>
                  <p className="text-foreground leading-relaxed text-lg mt-4">
                    बिहार का इतिहास ज्ञान, साहस और नेतृत्व से भरा है — लेकिन आज हमारे युवाओं को ऐसी चुनौतियों का सामना करना पड़ रहा है जो नहीं होनी चाहिए।
                  </p>
                </section>

                {/* Challenges */}
                <section className="mb-12 bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-primary mb-4">आप जिन चुनौतियों का सामना कर रहे हैं:</h3>
                  <ul className="space-y-2 text-foreground">
                    <li>❌ रोजगार के सीमित अवसर</li>
                    <li>❌ गुणवत्तापूर्ण शिक्षा का अभाव</li>
                    <li>❌ दूसरे राज्यों में पलायन</li>
                    <li>❌ राजनीतिक व्यवस्था जो युवा आवाज़ों को नजरअंदाज करती है</li>
                    <li>❌ भ्रष्टाचार जो वास्तविक प्रतिभा को रोकता है</li>
                    <li>❌ आधुनिक नेतृत्व की अनुपस्थिति</li>
                  </ul>
                  <p className="text-lg font-bold text-primary mt-6">
                    यह चक्र समाप्त होना चाहिए। और <span className="text-secondary">आप</span> ही इसे समाप्त कर सकते हैं।
                  </p>
                </section>

                {/* You Deserve */}
                <section className="mb-12">
                  <h2 className="text-2xl font-bold text-primary mb-6 pb-2 border-b-2 border-secondary">
                    आप एक नए बिहार के हकदार हैं
                  </h2>
                  <p className="text-foreground leading-relaxed text-lg mb-4">एक ऐसा बिहार जहाँ:</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                      <p className="font-semibold text-foreground">✓ आपकी प्रतिभा मायने रखती है</p>
                    </div>
                    <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                      <p className="font-semibold text-foreground">✓ आपकी मेहनत का पुरस्कार मिलता है</p>
                    </div>
                    <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                      <p className="font-semibold text-foreground">✓ आपके सपनों के लिए घर छोड़ना ज़रूरी नहीं</p>
                    </div>
                    <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                      <p className="font-semibold text-foreground">✓ आपकी आवाज़ सरकारी नीतियों को आकार देती है</p>
                    </div>
                    <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                      <p className="font-semibold text-foreground">✓ आपका भविष्य सम्मान के साथ बनता है</p>
                    </div>
                    <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                      <p className="font-semibold text-foreground">✓ नेता योग्यता से चुने जाते हैं, पैसे से नहीं</p>
                    </div>
                  </div>
                  <p className="text-lg text-center font-semibold text-secondary mt-6 bg-secondary/10 p-4 rounded-lg">
                    यही वह बिहार है जिसे हम BVP के माध्यम से बनाने के लिए काम कर रहे हैं।
                  </p>
                </section>

                {/* Why Youth Matter */}
                <section className="mb-12 bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-xl">
                  <h2 className="text-2xl font-bold text-primary mb-4">युवा सबसे अधिक क्यों मायने रखते हैं</h2>
                  <p className="text-lg font-bold text-primary mb-4">
                    बिहार की 60% से अधिक आबादी 35 वर्ष से कम उम्र की है।
                  </p>
                  <p className="text-foreground leading-relaxed text-lg mb-4">
                    यह केवल आंकड़ा नहीं है — यह एक <strong className="text-secondary">क्रांति है जो होने का इंतजार कर रही है</strong>।
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center mt-6">
                    {['🦁 साहसी', '💡 नवप्रवर्तनशील', '💎 ईमानदार', '💪 मेहनती', '🚀 भविष्योन्मुखी'].map((trait, i) => (
                      <span key={i} className="bg-white px-4 py-2 rounded-full font-semibold text-primary shadow-sm">
                        {trait}
                      </span>
                    ))}
                  </div>
                  <p className="text-foreground leading-relaxed text-lg mt-6 text-center italic">
                    लेकिन उनका समर्थन करने वाली व्यवस्था के बिना, सबसे प्रतिभाशाली दिमाग भी फीके पड़ जाते हैं।
                  </p>
                  <p className="text-xl font-bold text-center text-secondary mt-4">
                    BVP सिस्टम को बदलने के लिए मौजूद है, केवल इसमें भाग लेने के लिए नहीं।
                  </p>
                </section>

                {/* New Political Culture */}
                <section className="mb-12">
                  <h2 className="text-2xl font-bold text-primary mb-6 pb-2 border-b-2 border-secondary">
                    एक नई राजनीतिक संस्कृति — आपके लिए बनाई गई
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">भारतीय राजनीति में पहली बार, BVP लाता है:</p>
                  
                  <div className="space-y-4">
                    <div className="bg-card p-6 rounded-lg border-l-4 border-primary">
                      <h3 className="font-bold text-primary text-lg mb-2">✔ राजनीतिक उम्मीदवारों के लिए BPSC-शैली की परीक्षा</h3>
                      <p className="text-foreground">ताकि केवल योग्य, ईमानदार नेता उभरें।</p>
                    </div>
                    <div className="bg-card p-6 rounded-lg border-l-4 border-secondary">
                      <h3 className="font-bold text-primary text-lg mb-2">✔ पैसे से ऊपर योग्यता</h3>
                      <p className="text-foreground">आपकी मेहनत राजनीतिक संबंधों से अधिक मायने रखती है।</p>
                    </div>
                    <div className="bg-card p-6 rounded-lg border-l-4 border-primary">
                      <h3 className="font-bold text-primary text-lg mb-2">✔ युवा-प्रथम नीतियां</h3>
                      <p className="text-foreground">शिक्षा, रोजगार, कौशल विकास, डिजिटल सशक्तिकरण।</p>
                    </div>
                    <div className="bg-card p-6 rounded-lg border-l-4 border-secondary">
                      <h3 className="font-bold text-primary text-lg mb-2">✔ पारदर्शी शासन</h3>
                      <p className="text-foreground">कोई भ्रष्टाचार नहीं, कोई पिछले दरवाजे की राजनीति नहीं।</p>
                    </div>
                  </div>

                  <div className="mt-8 bg-secondary/10 border-2 border-secondary/30 p-6 rounded-lg text-center">
                    <p className="text-lg font-semibold text-foreground">
                      आप केवल <span className="text-primary">"मतदाता"</span> नहीं हैं।
                    </p>
                    <p className="text-xl font-bold text-primary mt-2">
                      आप भविष्य के नीति निर्माता, प्रशासक और नेता हैं।
                    </p>
                  </div>
                </section>

                {/* My Promise */}
                <section className="mb-12 bg-gradient-to-br from-primary to-primary/90 text-white p-8 rounded-xl">
                  <h2 className="text-2xl font-bold mb-6 text-center">आपसे मेरा वादा</h2>
                  <p className="text-lg font-semibold mb-6 text-center">मैं, अश्वनी, आपको अपनी व्यक्तिगत प्रतिबद्धता देता हूं:</p>
                  
                  <div className="space-y-3">
                    <p className="flex items-start gap-3"><span className="text-secondary text-xl">•</span> मैं आपके अवसरों के लिए लड़ूंगा।</p>
                    <p className="flex items-start gap-3"><span className="text-secondary text-xl">•</span> मैं आपके सपनों के लिए खड़ा रहूंगा।</p>
                    <p className="flex items-start gap-3"><span className="text-secondary text-xl">•</span> मैं आपके अधिकारों की रक्षा करूंगा।</p>
                    <p className="flex items-start gap-3"><span className="text-secondary text-xl">•</span> मैं आपके नेतृत्व के लिए दरवाजे खोलूंगा।</p>
                    <p className="flex items-start gap-3"><span className="text-secondary text-xl">•</span> मैं पुरानी राजनीतिक व्यवस्थाओं को चुनौती दूंगा जो आपकी वृद्धि को रोकती हैं।</p>
                  </div>

                  <div className="mt-6 text-center space-y-2">
                    <p className="text-xl font-bold text-secondary">आप अधिक के हकदार हैं।</p>
                    <p className="text-lg">और साथ मिलकर, हम अधिक हासिल करेंगे।</p>
                  </div>
                </section>

                {/* Join Movement */}
                <section className="mb-12">
                  <h2 className="text-2xl font-bold text-primary mb-6 text-center">युवा आंदोलन में शामिल हों</h2>
                  <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-xl border-2 border-primary/20 text-center">
                    <p className="text-xl text-foreground mb-6 leading-relaxed">
                      यह केवल एक राजनीतिक दल नहीं है।<br />
                      यह एक <strong className="text-primary">युवा-नेतृत्व वाला परिवर्तन आंदोलन</strong> है।
                    </p>
                    <p className="text-lg text-muted-foreground mb-4">यदि आप विश्वास करते हैं:</p>
                    <div className="flex flex-wrap gap-3 justify-center mb-6">
                      {['💎 ईमानदारी', '🎯 योग्यता', '🏗️ विकास', '🚀 नया नेतृत्व', '❤️ एक बेहतर बिहार'].map((value, i) => (
                        <span key={i} className="bg-white px-4 py-2 rounded-full font-semibold text-primary shadow-sm border border-primary/20">
                          {value}
                        </span>
                      ))}
                    </div>
                    <p className="text-xl font-bold text-primary">तो BVP आपका घर है।</p>
                  </div>
                </section>

                {/* Call to Action */}
                <section className="bg-gradient-to-r from-secondary to-primary text-white p-10 rounded-xl text-center">
                  <p className="text-4xl mb-4">🔥</p>
                  <div className="space-y-3 mb-8">
                    <p className="text-3xl font-bold">उठो।</p>
                    <p className="text-3xl font-bold">नेतृत्व करो।</p>
                    <p className="text-3xl font-bold">एक नया बिहार बनाओ।</p>
                  </div>
                  <p className="text-2xl font-bold mb-8">आपका समय अब है।</p>
                  <a 
                    href="/join" 
                    className="inline-flex items-center gap-2 bg-white text-primary hover:bg-white/90 px-10 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 shadow-xl"
                  >
                    BVP युवा विंग में शामिल हों
                  </a>
                </section>

                {/* Signature */}
                <div className="mt-12 text-right">
                  <p className="text-xl font-bold text-primary">— अश्वनी</p>
                  <p className="text-muted-foreground">संस्थापक नेता</p>
                  <p className="text-muted-foreground">बिहार विकास पार्टी</p>
                </div>

              </div>
            )}

          </div>
        </article>

        {/* Footer Note */}
        <div className="mt-12 bg-amber-50 border-l-4 border-amber-400 p-6 rounded">
          <p className="text-foreground">
            <strong className="text-amber-900">
              {activeTab === 'english' ? 'LEGAL DISCLAIMER:' : 'कानूनी अस्वीकरण:'}
            </strong>
            {' '}
            {activeTab === 'english' 
              ? 'Bihar Vikas Party is currently a proposed political party. Registration with the Election Commission of India will be initiated at the appropriate time.'
              : 'बिहार विकास पार्टी वर्तमान में एक प्रस्तावित राजनीतिक दल है। भारत के चुनाव आयोग के साथ पंजीकरण उचित समय पर शुरू किया जाएगा।'}
          </p>
        </div>
      </div>
    </section>
  )
}
