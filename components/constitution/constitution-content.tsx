'use client'

import { Download } from 'lucide-react'
import { jsPDF } from 'jspdf'

export default function ConstitutionContent() {
  const handleDownload = () => {
    const doc = new jsPDF('p', 'pt', 'a4')
    const pageWidth = doc.internal.pageSize.getWidth()
    const pageHeight = doc.internal.pageSize.getHeight()
    const margin = 40
    const maxLineWidth = pageWidth - margin * 2
    let yPosition = 60

    // Helper function to add text with page breaks
    const addText = (text, fontSize, isBold = false, indent = 0) => {
      doc.setFontSize(fontSize)
      doc.setFont('helvetica', isBold ? 'bold' : 'normal')
      
      const lines = doc.splitTextToSize(text, maxLineWidth - indent)
      
      lines.forEach((line) => {
        if (yPosition + fontSize > pageHeight - margin) {
          doc.addPage()
          yPosition = margin + 20
        }
        doc.text(line, margin + indent, yPosition)
        yPosition += fontSize * 1.4
      })
    }

    const addSpace = (space) => {
      yPosition += space
    }

    // Title
    doc.setFontSize(24)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(12, 45, 114) // BVP Blue
    doc.text('BIHAR VIKAS PARTY', pageWidth / 2, yPosition, { align: 'center' })
    yPosition += 30

    doc.setFontSize(18)
    doc.text('CONSTITUTION', pageWidth / 2, yPosition, { align: 'center' })
    yPosition += 30
    
    // Header line
    doc.setDrawColor(255, 122, 0) // Saffron
    doc.setLineWidth(2)
    doc.line(margin, yPosition, pageWidth - margin, yPosition)
    yPosition += 25
    
    doc.setTextColor(0, 0, 0) // Black text

    // Preamble
    doc.setTextColor(12, 45, 114)
    addText('PREAMBLE', 16, true)
    doc.setTextColor(0, 0, 0)
    addSpace(10)
    addText('We, the citizens of Bihar, inspired by a vision of transparent governance, merit-based leadership, and all-round development, do hereby adopt this Constitution for the Bihar Vikas Party (BVP).', 11)
    addSpace(20)

    // Part I
    doc.setTextColor(12, 45, 114)
    addText('PART I: GENERAL PROVISIONS', 14, true)
    doc.setTextColor(0, 0, 0)
    addSpace(15)

    // Article 1
    addText('Article 1: Name and Symbol', 12, true)
    addSpace(5)
    addText('1.1 The party shall be known as "Bihar Vikas Party" (BVP)', 10, false, 20)
    addText('1.2 The symbol of the party is "BVP" in a circular emblem', 10, false, 20)
    addText('1.3 The primary colors of the party are Deep Blue (#0C2D72) and Saffron (#FF7A00)', 10, false, 20)
    addSpace(10)

    // Article 2
    addText('Article 2: Objectives', 12, true)
    addSpace(5)
    addText('2.1 To promote transparent, accountable, and corruption-free governance in Bihar', 10, false, 20)
    addText('2.2 To ensure merit-based selection of candidates through examination and interview', 10, false, 20)
    addText('2.3 To empower youth through education, skills training, and employment opportunities', 10, false, 20)
    addText('2.4 To establish equitable development across all districts of Bihar', 10, false, 20)
    addText('2.5 To protect the constitutional values of democracy, liberty, equality, and justice', 10, false, 20)
    addText('2.6 To promote social harmony and communal peace', 10, false, 20)
    addText('2.7 To ensure inclusive growth and social justice for all sections of society', 10, false, 20)
    addSpace(10)

    // Article 3
    addText('Article 3: Core Values', 12, true)
    addSpace(5)
    addText('3.1 Transparency: All party activities and decisions shall be transparent and open to public scrutiny', 10, false, 20)
    addText('3.2 Integrity: Party members must maintain the highest standards of personal and professional integrity', 10, false, 20)
    addText('3.3 Merit: Selection of candidates shall be based on qualification, capability, and character', 10, false, 20)
    addText('3.4 Accountability: Every leader is accountable to the party and the people', 10, false, 20)
    addText('3.5 Service: Politics is service to the nation and state, not personal benefit', 10, false, 20)
    addText('3.6 Equality: The party upholds the constitutional principle of equality for all citizens', 10, false, 20)
    addSpace(20)

    // Part II
    doc.setTextColor(12, 45, 114)
    addText('PART II: PARTY STRUCTURE AND ORGANIZATION', 14, true)
    doc.setTextColor(0, 0, 0)
    addSpace(15)

    addText('Article 4: Organizational Structure', 12, true)
    addSpace(5)
    addText('4.1 The party shall have the following organizational hierarchy:', 10, false, 20)
    addText('- National Party Council (Supreme body)', 10, false, 30)
    addText('- State Party Council', 10, false, 30)
    addText('- District Party Council', 10, false, 30)
    addText('- Block-level Units', 10, false, 30)
    addText('- Booth-level Units', 10, false, 30)
    addText('4.2 Each level shall have clearly defined roles and responsibilities', 10, false, 20)
    addText('4.3 All positions shall be filled through transparent and democratic processes', 10, false, 20)
    addSpace(10)

    addText('Article 5: National Party Council', 12, true)
    addSpace(5)
    addText('5.1 The National Party Council is the supreme governing body of BVP', 10, false, 20)
    addText('5.2 It shall consist of: Party President, Vice President, General Secretary, Treasurer, and 5-7 additional Council Members', 10, false, 20)
    addText('5.3 The Council shall meet quarterly and in emergency sessions as required', 10, false, 20)
    addText('5.4 All major decisions shall be made by consensus or majority vote', 10, false, 20)
    addText('5.5 Council members serve a 5-year term', 10, false, 20)
    addSpace(10)

    addText('Article 6: Party President', 12, true)
    addSpace(5)
    addText('6.1 The Party President is the chief executive and representative of BVP', 10, false, 20)
    addText('6.2 Powers include presiding over meetings, appointing members, representing the party, and implementing Council decisions', 10, false, 20)
    addText('6.3 The President is elected for a 5-year term and can serve a maximum of 2 consecutive terms', 10, false, 20)
    addSpace(10)

    // Part III
    addSpace(10)
    doc.setTextColor(12, 45, 114)
    addText('PART III: CANDIDATE SELECTION SYSTEM', 14, true)
    doc.setTextColor(0, 0, 0)
    addSpace(15)

    addText('Article 10: BPSC-Style Examination System', 12, true)
    addSpace(5)
    addText('10.1 All candidates contesting elections shall go through a rigorous examination system', 10, false, 20)
    addText('10.2 The examination shall test knowledge, ethics, leadership qualities, and administrative capability', 10, false, 20)
    addText('10.3 Written Exam: 200 marks, Interview: 100 marks, Total: 300 marks', 10, false, 20)
    addText('10.4 The merit list shall be prepared based on combined scores', 10, false, 20)
    addText('10.5 All examination procedures shall be transparent and open to public observation', 10, false, 20)
    addSpace(10)

    addText('Article 11: Candidate Eligibility', 12, true)
    addSpace(5)
    addText('11.1 Must be an Indian citizen', 10, false, 20)
    addText('11.2 Must have completed 25 years of age', 10, false, 20)
    addText('11.3 Must be a registered voter in the constituency', 10, false, 20)
    addText('11.4 Must be a party member for at least 6 months prior to examination', 10, false, 20)
    addText('11.5 Must have no criminal convictions', 10, false, 20)
    addSpace(15)

    // Additional Parts Summary
    addText('ADDITIONAL PARTS', 12, true)
    addSpace(5)
    addText('Part IV: Membership (Articles 13-16) - Categories, Rights, Duties, and Fees', 10, false, 20)
    addText('Part V: Party Finances (Articles 17-19) - Management, Utilization, and Transparency', 10, false, 20)
    addText('Part VI: Internal Democracy (Articles 20-21) - Disciplinary Action and Conflict Resolution', 10, false, 20)
    addText('Part VII: Elections (Articles 22-23) - Party Elections and Re-Selection Rules', 10, false, 20)
    addText('Part VIII: Amendments (Articles 24-25) - Constitutional Amendments and Review', 10, false, 20)
    addText('Part IX: Alliances (Articles 26-27) - National Alliances and International Relations', 10, false, 20)
    addText('Part X: Final Provisions (Articles 28-30) - Effective Date and Interpretation', 10, false, 20)
    addSpace(25)

    // Adoption Certificate
    doc.setTextColor(12, 45, 114)
    addText('ADOPTION CERTIFICATE', 16, true)
    doc.setTextColor(0, 0, 0)
    addSpace(15)
    addText('The Constitution of Bihar Vikas Party has been adopted and shall govern all party activities and the conduct of its members. This Constitution reflects our commitment to transparent, ethical, and democratic governance in Bihar.', 11)
    addSpace(20)
    addText('Adopted: [Date of formal registration with Election Commission of India]', 11, true)
    addSpace(30)
    
    doc.setTextColor(255, 122, 0) // Saffron
    doc.setFontSize(14)
    doc.setFont('helvetica', 'bold')
    doc.text('Bihar Vikas Party - Building Tomorrow, Today', pageWidth / 2, yPosition, { align: 'center' })

    // Add page numbers
    const pageCount = doc.internal.pages.length - 1
    doc.setTextColor(0, 0, 0)
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i)
      doc.setFontSize(10)
      doc.setFont('helvetica', 'normal')
      doc.text(`Page ${i} of ${pageCount}`, pageWidth - margin, pageHeight - 20, { align: 'right' })
    }

    // Save the PDF
    doc.save('Bihar-Vikas-Party-Constitution.pdf')
  }

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Download Button */}
        <div className="mb-12 flex justify-center">
          <button 
            onClick={handleDownload}
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-primary/90 transition-all shadow-md hover:shadow-lg hover:scale-105 active:scale-95"
          >
            <Download size={20} />
            Download Constitution PDF
          </button>
        </div>

        {/* Constitution Document */}
        <article className="bg-card rounded-xl shadow-lg">
          
          {/* Document Header */}
          <header className="bg-gradient-to-r from-primary to-primary/80 text-white p-8 sm:p-12 rounded-t-xl">
            <h1 className="text-3xl sm:text-4xl font-bold text-center mb-2">
              BIHAR VIKAS PARTY
            </h1>
            <p className="text-xl text-center text-white/90">CONSTITUTION</p>
          </header>

          {/* Document Body */}
          <div className="p-8 sm:p-12">
            
            {/* Preamble */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4 pb-2 border-b-2 border-secondary">
                PREAMBLE
              </h2>
              <p className="text-foreground leading-relaxed">
                We, the citizens of Bihar, inspired by a vision of transparent governance, 
                merit-based leadership, and all-round development, do hereby adopt this 
                Constitution for the Bihar Vikas Party (BVP).
              </p>
            </section>

            {/* Part I: General Provisions */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-6 pb-2 border-b-2 border-secondary">
                PART I: GENERAL PROVISIONS
              </h2>

              {/* Article 1 */}
              <article className="mb-8 bg-card p-6 rounded-lg border-l-4 border-primary">
                <h3 className="text-xl font-bold text-primary mb-3">
                  Article 1: Name and Symbol
                </h3>
                <div className="space-y-2 text-foreground">
                  <p><span className="font-semibold">1.1</span> The party shall be known as "Bihar Vikas Party" (BVP)</p>
                  <p><span className="font-semibold">1.2</span> The symbol of the party is "BVP" in a circular emblem</p>
                  <p><span className="font-semibold">1.3</span> The primary colors of the party are Deep Blue (#0C2D72) and Saffron (#FF7A00)</p>
                </div>
              </article>

              {/* Article 2 */}
              <article className="mb-8 bg-card p-6 rounded-lg border-l-4 border-primary">
                <h3 className="text-xl font-bold text-primary mb-3">
                  Article 2: Objectives
                </h3>
                <ul className="space-y-2 text-foreground list-none">
                  <li><span className="font-semibold">2.1</span> To promote transparent, accountable, and corruption-free governance in Bihar</li>
                  <li><span className="font-semibold">2.2</span> To ensure merit-based selection of candidates through examination and interview</li>
                  <li><span className="font-semibold">2.3</span> To empower youth through education, skills training, and employment opportunities</li>
                  <li><span className="font-semibold">2.4</span> To establish equitable development across all districts of Bihar</li>
                  <li><span className="font-semibold">2.5</span> To protect the constitutional values of democracy, liberty, equality, and justice</li>
                  <li><span className="font-semibold">2.6</span> To promote social harmony and communal peace</li>
                  <li><span className="font-semibold">2.7</span> To ensure inclusive growth and social justice for all sections of society</li>
                </ul>
              </article>

              {/* Article 3 */}
              <article className="mb-8 bg-card p-6 rounded-lg border-l-4 border-primary">
                <h3 className="text-xl font-bold text-primary mb-3">
                  Article 3: Core Values
                </h3>
                <ul className="space-y-3 text-foreground list-none">
                  <li>
                    <span className="font-semibold">3.1 Transparency:</span> All party activities and decisions shall be transparent and open to public scrutiny
                  </li>
                  <li>
                    <span className="font-semibold">3.2 Integrity:</span> Party members must maintain the highest standards of personal and professional integrity
                  </li>
                  <li>
                    <span className="font-semibold">3.3 Merit:</span> Selection of candidates shall be based on qualification, capability, and character
                  </li>
                  <li>
                    <span className="font-semibold">3.4 Accountability:</span> Every leader is accountable to the party and the people
                  </li>
                  <li>
                    <span className="font-semibold">3.5 Service:</span> Politics is service to the nation and state, not personal benefit
                  </li>
                  <li>
                    <span className="font-semibold">3.6 Equality:</span> The party upholds the constitutional principle of equality for all citizens
                  </li>
                </ul>
              </article>
            </section>

            {/* Part II: Party Structure */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-6 pb-2 border-b-2 border-secondary">
                PART II: PARTY STRUCTURE AND ORGANIZATION
              </h2>

              <article className="mb-8 bg-card p-6 rounded-lg border-l-4 border-primary">
                <h3 className="text-xl font-bold text-primary mb-3">
                  Article 4: Organizational Structure
                </h3>
                <div className="space-y-3 text-foreground">
                  <p><span className="font-semibold">4.1</span> The party shall have the following organizational hierarchy:</p>
                  <ul className="ml-8 space-y-1 list-disc">
                    <li>National Party Council (Supreme body)</li>
                    <li>State Party Council</li>
                    <li>District Party Council</li>
                    <li>Block-level Units</li>
                    <li>Booth-level Units</li>
                  </ul>
                  <p><span className="font-semibold">4.2</span> Each level shall have clearly defined roles and responsibilities</p>
                  <p><span className="font-semibold">4.3</span> All positions shall be filled through transparent and democratic processes</p>
                </div>
              </article>

              <article className="mb-8 bg-card p-6 rounded-lg border-l-4 border-primary">
                <h3 className="text-xl font-bold text-primary mb-3">
                  Article 5: National Party Council
                </h3>
                <div className="space-y-3 text-foreground">
                  <p><span className="font-semibold">5.1</span> The National Party Council is the supreme governing body of BVP</p>
                  <p><span className="font-semibold">5.2</span> It shall consist of:</p>
                  <ul className="ml-8 space-y-1 list-disc">
                    <li>Party President</li>
                    <li>Vice President</li>
                    <li>General Secretary</li>
                    <li>Treasurer</li>
                    <li>5-7 additional Council Members</li>
                  </ul>
                  <p><span className="font-semibold">5.3</span> The Council shall meet quarterly and in emergency sessions as required</p>
                  <p><span className="font-semibold">5.4</span> All major decisions shall be made by consensus or majority vote</p>
                  <p><span className="font-semibold">5.5</span> Council members serve a 5-year term</p>
                </div>
              </article>

              {/* Articles 6-9 (Office Bearers) */}
              <article className="mb-8 bg-card p-6 rounded-lg border-l-4 border-primary">
                <h3 className="text-xl font-bold text-primary mb-3">
                  Article 6: Party President
                </h3>
                <div className="space-y-2 text-foreground">
                  <p><span className="font-semibold">6.1</span> The Party President is the chief executive and representative of BVP</p>
                  <p><span className="font-semibold">6.2</span> Powers and duties include:</p>
                  <ul className="ml-8 space-y-1 list-disc">
                    <li>Presiding over party meetings and councils</li>
                    <li>Appointing committee members (with council approval)</li>
                    <li>Representing the party in public and media</li>
                    <li>Implementing decisions of the National Council</li>
                    <li>Ensuring adherence to the Constitution</li>
                  </ul>
                  <p><span className="font-semibold">6.3</span> The President is elected for a 5-year term and can serve a maximum of 2 consecutive terms</p>
                </div>
              </article>

              <article className="mb-8 bg-card p-6 rounded-lg border-l-4 border-primary">
                <h3 className="text-xl font-bold text-primary mb-3">
                  Article 7: Vice President
                </h3>
                <div className="space-y-2 text-foreground">
                  <p><span className="font-semibold">7.1</span> The Vice President assists the President and acts as his/her deputy</p>
                  <p><span className="font-semibold">7.2</span> Performs duties assigned by the President</p>
                  <p><span className="font-semibold">7.3</span> Assumes the role of President in case of resignation or incapacity</p>
                </div>
              </article>

              <article className="mb-8 bg-card p-6 rounded-lg border-l-4 border-primary">
                <h3 className="text-xl font-bold text-primary mb-3">
                  Article 8: General Secretary
                </h3>
                <div className="space-y-2 text-foreground">
                  <p><span className="font-semibold">8.1</span> The General Secretary handles day-to-day administration of the party</p>
                  <p><span className="font-semibold">8.2</span> Maintains party records and manages party communications</p>
                  <p><span className="font-semibold">8.3</span> Coordinates with district and state organizations</p>
                </div>
              </article>

              <article className="mb-8 bg-card p-6 rounded-lg border-l-4 border-primary">
                <h3 className="text-xl font-bold text-primary mb-3">
                  Article 9: Treasurer
                </h3>
                <div className="space-y-2 text-foreground">
                  <p><span className="font-semibold">9.1</span> The Treasurer manages all financial affairs of the party</p>
                  <p><span className="font-semibold">9.2</span> Maintains transparent accounts and financial records</p>
                  <p><span className="font-semibold">9.3</span> Files annual financial statements as required by law</p>
                  <p><span className="font-semibold">9.4</span> All donations are documented and disclosed as per electoral laws</p>
                </div>
              </article>
            </section>

            {/* Part III: Candidate Selection */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-6 pb-2 border-b-2 border-secondary">
                PART III: CANDIDATE SELECTION SYSTEM
              </h2>

              <article className="mb-8 bg-secondary/10 p-6 rounded-lg border-l-4 border-secondary">
                <h3 className="text-xl font-bold text-saffron mb-3">
                  Article 10: BPSC-Style Examination System
                </h3>
                <div className="space-y-2 text-foreground">
                  <p><span className="font-semibold">10.1</span> All candidates contesting elections shall go through a rigorous examination system</p>
                  <p><span className="font-semibold">10.2</span> The examination shall test knowledge, ethics, leadership qualities, and administrative capability</p>
                  <p><span className="font-semibold">10.3</span> Examination shall be conducted in stages:</p>
                  <ul className="ml-8 space-y-1 list-disc">
                    <li>Written Exam: 200 marks</li>
                    <li>Interview: 100 marks</li>
                    <li>Total: 300 marks</li>
                  </ul>
                  <p><span className="font-semibold">10.4</span> The merit list shall be prepared based on combined scores</p>
                  <p><span className="font-semibold">10.5</span> All examination procedures shall be transparent and open to public observation</p>
                </div>
              </article>

              <article className="mb-8 bg-card p-6 rounded-lg border-l-4 border-primary">
                <h3 className="text-xl font-bold text-primary mb-3">
                  Article 11: Candidate Eligibility
                </h3>
                <ul className="space-y-2 text-foreground list-none">
                  <li><span className="font-semibold">11.1</span> Must be an Indian citizen</li>
                  <li><span className="font-semibold">11.2</span> Must have completed 25 years of age</li>
                  <li><span className="font-semibold">11.3</span> Must be a registered voter in the constituency</li>
                  <li><span className="font-semibold">11.4</span> Must be a member of the party for at least 6 months prior to the examination</li>
                  <li><span className="font-semibold">11.5</span> Must have no criminal convictions</li>
                  <li><span className="font-semibold">11.6</span> Must not have been expelled from any political party</li>
                  <li><span className="font-semibold">11.7</span> Must meet the educational qualifications as specified by the party</li>
                </ul>
              </article>

              <article className="mb-8 bg-card p-6 rounded-lg border-l-4 border-primary">
                <h3 className="text-xl font-bold text-primary mb-3">
                  Article 12: Candidate Code of Conduct
                </h3>
                <ul className="space-y-2 text-foreground list-none">
                  <li><span className="font-semibold">12.1</span> All candidates must follow a strict code of conduct</li>
                  <li><span className="font-semibold">12.2</span> No candidate shall make false or unsubstantiated claims</li>
                  <li><span className="font-semibold">12.3</span> No candidate shall engage in communal or casteist politics</li>
                  <li><span className="font-semibold">12.4</span> Campaign expenditure shall be fully transparent and within legal limits</li>
                  <li><span className="font-semibold">12.5</span> Violation of code of conduct may result in disqualification</li>
                </ul>
              </article>
            </section>

            {/* Remaining Parts Summary */}
            <div className="bg-primary/5 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-bold text-primary mb-4">Additional Parts Include:</h3>
              <div className="grid md:grid-cols-2 gap-4 text-foreground">
                <div>
                  <p className="font-semibold text-primary">Part IV: Membership</p>
                  <p className="text-sm">Articles 13-16: Categories, Rights, Duties, and Fees</p>
                </div>
                <div>
                  <p className="font-semibold text-primary">Part V: Party Finances</p>
                  <p className="text-sm">Articles 17-19: Management, Utilization, and Transparency</p>
                </div>
                <div>
                  <p className="font-semibold text-primary">Part VI: Internal Democracy</p>
                  <p className="text-sm">Articles 20-21: Disciplinary Action and Conflict Resolution</p>
                </div>
                <div>
                  <p className="font-semibold text-primary">Part VII: Elections</p>
                  <p className="text-sm">Articles 22-23: Party Elections and Re-Selection Rules</p>
                </div>
                <div>
                  <p className="font-semibold text-primary">Part VIII: Amendments</p>
                  <p className="text-sm">Articles 24-25: Constitutional Amendments and Review</p>
                </div>
                <div>
                  <p className="font-semibold text-primary">Part IX: Alliances</p>
                  <p className="text-sm">Articles 26-27: National Alliances and International Relations</p>
                </div>
                <div className="md:col-span-2">
                  <p className="font-semibold text-primary">Part X: Final Provisions</p>
                  <p className="text-sm">Articles 28-30: Effective Date, Existing Provisions, and Interpretation</p>
                </div>
              </div>
            </div>

            {/* Adoption Certificate */}
            <section className="bg-gradient-to-br from-primary to-primary/80 text-white p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-center">
                ADOPTION CERTIFICATE
              </h2>
              <p className="leading-relaxed mb-4 text-center">
                The Constitution of Bihar Vikas Party has been adopted and shall govern all party 
                activities and the conduct of its members. This Constitution reflects our commitment 
                to transparent, ethical, and democratic governance in Bihar.
              </p>
              <p className="text-center font-semibold">
                Adopted: [Date of formal registration with Election Commission of India]
              </p>
              <p className="text-center mt-6 text-lg font-bold text-secondary">
                Bihar Vikas Party - Building Tomorrow, Today
              </p>
            </section>

          </div>
        </article>

        {/* Footer Note */}
        <div className="mt-12 bg-primary/5 border-l-4 border-primary p-6 rounded">
          <p className="text-foreground">
            <strong className="text-primary">Note:</strong> This Constitution is a comprehensive document that governs Bihar Vikas Party's structure, operations, and democratic processes. It reflects our commitment to transparency, merit-based leadership, and inclusive governance. The Constitution will be formally registered with the Election Commission of India upon party registration.
          </p>
        </div>
      </div>
    </section>
  )
}
