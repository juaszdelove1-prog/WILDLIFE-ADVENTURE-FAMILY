import { ArrowUpRight, Bird, Compass, Leaf, Menu, Mountain, TreePine, UsersRound, X } from 'lucide-react'
import { useState } from 'react'

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
  <nav><a className="brand" href="#top">WILDLIFE ADVENTURE FAMILY</a><button onClick={()=>setOpen(!open)} aria-label="Menu">{open?<X/>:<Menu/>}</button><div className={open?'links open':'links'}><a href="#about">Kuhusu Sisi</a><a href="#work">Tunachofanya</a><a href="#tanzania">Tanzania Yetu</a><a href="#contact">Wasiliana</a></div></nav>
  <header id="top" className="hero"><div><p className="kicker">TANZANIA · SHIRIKA LA KITAIFA</p><h1>Linda asili.<br/><em>Jenga kesho.</em></h1><p>Wildlife Adventure Family (WAF) ni Shirika Lisilo la Kiserikali la Tanzania linalojikita katika uhifadhi wa wanyamapori na mazingira, elimu ya mazingira, utalii endelevu na ushirikishwaji wa jamii katika matumizi endelevu ya rasilimali za asili.</p><a className="cta" href="#work">Gundua kazi yetu <ArrowUpRight size={18}/></a></div><div className="hero-art"><span>PROTECT</span><span>EXPLORE</span><span>TOGETHER</span></div></header>
  <section id="about"><p className="kicker">01 · SISI NI NANI</p><h2>Asili ni urithi,<br/><em>uhifadhi ni wajibu.</em></h2><p className="lead">Tunafanya kazi katika ngazi ya kitaifa kukuza uhifadhi, ulinzi wa mazingira, utalii endelevu na ushiriki wa jamii kwa manufaa ya kizazi cha sasa na kijacho.</p></section>
  <section id="work" className="dark"><p className="kicker">02 · TUNACHOFANYA</p><h2>Uhifadhi unaounganisha<br/><em>asili na jamii.</em></h2><div className="grid">{work.map(([t,d,I]:any,i)=><article key={t}><span>0{i+1}</span><I/><h3>{t}</h3><p>{d}</p></article>)}</div></section>
  <section id="tanzania"><p className="kicker">03 · DISCOVER TANZANIA</p><h2>Nchi moja.<br/><em>Hadithi nyingi.</em></h2><p className="lead">Tanzania Yetu inatambulisha mazingira, utamaduni na maisha ya jamii kutoka maeneo mbalimbali ya nchi. Maudhui haya ni ya elimu na utambulisho wa Tanzania; hayamaanishi kwamba WAF inaendesha kila sekta iliyoonyeshwa.</p><div className="discover">{discover.map(([t,d],i)=><article key={t}><span>{String(i+1).padStart(2,'0')}</span><h3>{t}</h3><p>{d}</p></article>)}</div></section>
  <section className="quote"><blockquote>“Tunapolinda wanyamapori, tunalinda maisha ya jamii na kizazi kijacho.”</blockquote><p>— Wildlife Adventure Family</p></section>
  <section id="contact"><p className="kicker">04 · WASILIANA NASI</p><h2>Tuunganishe nguvu<br/><em>kulinda asili.</em></h2><p className="lead">Makao Makuu: BUSWELU B Street, karibu na Buswelu Center, Buswelu Ward, Ilemela District, Mwanza Region. P.O. BOX 735.</p></section>
  <footer><strong>WILDLIFE ADVENTURE FAMILY</strong><span>© 2026 WAF · Tanzania</span><span>Kwa watu. Kwa wanyamapori. Kwa asili.</span></footer>
 </main>
}