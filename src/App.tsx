import { ArrowUpRight, Bird, Compass, Leaf, Menu, Mountain, TreePine, UsersRound, X } from 'lucide-react'
import { useState } from 'react'

const heroImage='https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=1600&q=85'
const wildlifeImage='https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1400&q=85'
const landscapeImage='https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1400&q=85'
const work=[
['Uhifadhi wa wanyamapori','Tunakuza uhifadhi, ulinzi na usimamizi endelevu wa wanyamapori, makazi yao, mifumo ya ikolojia na rasilimali za asili.',Compass],
['Mazingira na urejeshaji','Tunasaidia ulinzi na urejeshaji wa misitu, vyanzo vya maji, makazi ya wanyamapori na mifumo nyeti ya ikolojia.',TreePine],
['Elimu ya mazingira','Tunakuza uelewa kuhusu mazingira, mabadiliko ya tabianchi, bioanuwai na matumizi endelevu ya rasilimali za asili.',Leaf],
['Utalii endelevu','Tunakuza utalii unaowajibika, utalii wa jamii na eco-tourism unaochangia uhifadhi na maendeleo ya jamii.',Mountain],
['Ushirikishwaji wa jamii','Tunashirikisha jamii zinazozunguka maeneo ya uhifadhi na vivutio vya utalii katika uhifadhi na matumizi endelevu ya rasilimali.',UsersRound],
['Jamii na urithi','Tunathamini maarifa, tamaduni na urithi wa jamii kama sehemu ya utambulisho na maendeleo endelevu ya Tanzania.',Bird],
]
const discover=[
['Utalii na Wanyamapori','Hifadhi, milima, maziwa, pwani na bioanuwai inayofanya Tanzania kuwa ya kipekee.'],
['Utamaduni na Urithi','Jamii, lugha, sanaa, vyakula na maarifa ya asili kutoka sehemu mbalimbali za Tanzania.'],
['Kilimo','Kilimo na maisha ya jamii kama sehemu ya matumizi endelevu ya ardhi na maendeleo ya vijijini.'],
['Biashara na Ujasiriamali','Fursa na shughuli za kiuchumi zinazogusa maisha ya jamii katika maeneo mbalimbali.'],
['Madini na Rasilimali','Utajiri wa rasilimali za Tanzania ukitazamwa kwa muktadha wa mazingira, jamii na uwajibikaji.'],
['Mazingira na Tabianchi','Misitu, maji, ardhi, mifumo ya ikolojia na hatua zinazosaidia kulinda mazingira kwa vizazi vijavyo.'],
]
export default function App(){
 const [open,setOpen]=useState(false)
 return <main>
  <nav><a className="brand" href="#top"><span className="mark">WAF</span><span>WILDLIFE ADVENTURE FAMILY</span></a><button onClick={()=>setOpen(!open)} aria-label="Menu">{open?<X/>:<Menu/>}</button><div className={open?'links open':'links'}><a href="#about">Kuhusu Sisi</a><a href="#work">Tunachofanya</a><a href="#tanzania">Tanzania Yetu</a><a href="#programs">Programu</a><a href="#contact">Wasiliana</a></div></nav>
  <header id="top" className="hero"><div className="hero-copy"><p className="kicker">TANZANIA · SHIRIKA LA KITAIFA</p><h1>Linda asili.<br/><em>Jenga kesho.</em></h1><p>Wildlife Adventure Family (WAF) ni Shirika Lisilo la Kiserikali la Tanzania linalojikita katika uhifadhi wa wanyamapori na mazingira, elimu ya mazingira, utalii endelevu na ushirikishwaji wa jamii katika matumizi endelevu ya rasilimali za asili.</p><a className="cta" href="#work">Gundua kazi yetu <ArrowUpRight size={18}/></a></div><div className="hero-photo" style={{backgroundImage:`linear-gradient(180deg,transparent 35%,rgba(8,31,18,.78)),url("${heroImage}")`}}><div><small>PROTECT · EXPLORE · TOGETHER</small><strong>Tanzania yetu,<br/>urithi wetu.</strong></div></div></header>
  <section id="about" className="about"><div><p className="kicker">01 · SISI NI NANI</p><h2>Asili ni urithi,<br/><em>uhifadhi ni wajibu.</em></h2><p className="lead">Tunafanya kazi katika ngazi ya kitaifa kukuza uhifadhi, ulinzi wa mazingira, utalii endelevu na ushiriki wa jamii kwa manufaa ya kizazi cha sasa na kijacho.</p></div><img src={wildlifeImage} alt="Mandhari ya wanyamapori Afrika Mashariki"/></section>
  <section id="work" className="dark"><p className="kicker">02 · TUNACHOFANYA</p><h2>Uhifadhi unaounganisha<br/><em>asili na jamii.</em></h2><div className="grid">{work.map(([t,d,I]:any,i)=><article key={t}><span>0{i+1}</span><I/><h3>{t}</h3><p>{d}</p></article>)}</div></section>
  <section id="tanzania"><p className="kicker">03 · DISCOVER TANZANIA</p><h2>Nchi moja.<br/><em>Hadithi nyingi.</em></h2><p className="lead">Tanzania Yetu inatambulisha mazingira, utamaduni na maisha ya jamii kutoka maeneo mbalimbali ya nchi. Maudhui haya ni ya elimu na utambulisho wa Tanzania; hayamaanishi kwamba WAF inaendesha kila sekta iliyoonyeshwa.</p><div className="feature-photo" style={{backgroundImage:`linear-gradient(90deg,rgba(10,32,19,.8),rgba(10,32,19,.08)),url("${landscapeImage}")`}}><div><span>TANZANIA YETU</span><h3>Asili, jamii na maendeleo endelevu.</h3></div></div><div className="discover">{discover.map(([t,d],i)=><article key={t}><span>{String(i+1).padStart(2,'0')}</span><h3>{t}</h3><p>{d}</p></article>)}</div></section>
  <section id="programs" className="programs"><p className="kicker">04 · PROGRAMU NA MIRADI</p><div className="program-head"><h2>Hatua za leo.<br/><em>Matokeo ya kesho.</em></h2><p className="lead">Eneo hili litatumika kuonyesha programu na miradi ya WAF iliyoidhinishwa kwa taarifa za umma, pamoja na habari na simulizi za shughuli za taasisi.</p></div><div className="program-cards"><article><span>CONSERVATION</span><h3>Uhifadhi na Mazingira</h3><p>Programu zinazolenga ulinzi wa mazingira, makazi ya wanyamapori na elimu ya uhifadhi.</p></article><article><span>COMMUNITY</span><h3>Jamii na Elimu</h3><p>Ushirikishwaji wa jamii na kuongeza uelewa kuhusu matumizi endelevu ya rasilimali.</p></article><article><span>TOURISM</span><h3>Utalii Endelevu</h3><p>Kukuza utalii unaowajibika unaoheshimu mazingira, jamii na urithi wa Tanzania.</p></article></div></section>
  <section className="quote"><blockquote>“Tunapolinda wanyamapori, tunalinda maisha ya jamii na kizazi kijacho.”</blockquote><p>— Wildlife Adventure Family</p></section>
  <section id="contact"><p className="kicker">05 · WASILIANA NASI</p><h2>Tuunganishe nguvu<br/><em>kulinda asili.</em></h2><p className="lead">Makao Makuu: BUSWELU B Street, karibu na Buswelu Center, Buswelu Ward, Ilemela District, Mwanza Region. P.O. BOX 735.</p><p className="privacy-note">Tovuti hii ina taarifa za umma pekee. Nyaraka na taarifa za ndani za taasisi hazichapishwi hapa.</p></section>
  <footer><strong>WILDLIFE ADVENTURE FAMILY</strong><span>© 2026 WAF · Tanzania</span><span>Kwa watu. Kwa wanyamapori. Kwa asili.</span></footer>
 </main>
}