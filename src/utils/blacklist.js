export const URL_BLACKLIST = [
  'https://sspai.com/',
  'https://www.nikonpassion.com',
  'https://m.weibo.cn',
  'https://mp.weixin.qq.com/',
  'https://github.com',
  'forums.adobe.com',
  'https://www.volkskrant.nl',
  'https://www.managementimpact.nl',
  'https:/medium.com',
  'https:/link.medium.com',
  'https://www.nytimes.com',
  'https://www.infoworld.com',
  'https://getasthmahelp.org',
  'https://www.dropbox.com',
  'https://www.ibexlabs.com',
  'http://eotaxjournal.com',
  'https://www.clipartsfree.de',
  'https://www.reddit.com',
  'http://www.toutiao.com',
  'https://m.toutiao.com',
  'https://m.toutiaocdn.com',
  'https://outline.com',
  'https://www.zhihu.com',
  'https://zhuanlan.zhihu.com',
  'https://www.evernote.com',
  'https://www.pathofexile.com',
  'http://www.wollongong.nsw.gov.au',
  'https://neuronaldynamics.epfl.ch',
  'https://screenshots.firefox.com',
  'https://www.weibo.com',
  'https://www.bluetongueskinks.org',
  'https://n151.meraki.com',
  'https://brill.com',
  'https://fallout.bethesda.net',
  'https://apply.ycombinator.com',
  'https://mail.163.com',
  'https://debezium.io',
  'https://www.bloomberg.com',
  'https://securemail1.messagelabs.com',
  'https://gokoji.com',
  'https://www.lyft.com',
  'https://www.iana.org',
  'https://www.atatech.org',
  'http://www.qdaily.com',
  'https://www.nps.gov',
  'https://www.jeffco.us',
  'https://www.wildtronics.com',
  'https://www.epubor.com',
  'https://console.cloud.google.com',
  'https://www.kwf.nl',
  'https://www.japanesetools.com.au',
  'https://www.kirkpatrickpartners.com',
  'http://www.iyingdi.com',
  'https://onedrive.live.com',
  'https://courses.edx.org',
  'https://www.lucidchart.com',
  'https://zoom.us',
  'https://publons.com',
  'https://read.amazon.com',
  'https://www.dukemychart.org',
  'https://my.nursefinders.com',
  'https://theordinary.com',
  'http://www.schematherapy.com',
  'https://agilemanifesto.org',
  'https://verified.capitalone.com',
  'https://kdd.ics.uci.edu',
  'https://paytrace.com',
  'https://www.mpi.mb.ca',
  'https://media.weibo.cn',
  'https://souche.yuque.com',
  'https://mail.google.com',
  'https://www.gartner.com',
  'https://feedly.com',
  'https://dribbble.com',
  'https://www.blinkist.com',
  'https://storycircle.cu.studio',
  'https://www.notion.so',
  'http://lib.ewha.ac.kr',
  'https://www.icloud.com',
  'https://pin.it',
  'https://note.mu',
  'https://m.baidu.com',
  'https://kolarbyn.se',
  'https://www.booking.com',
  'https://fd.zaih.com',
  'https://show.gotokeep.com',
  'https://www.orthobullets.com',
  'http://u.cs.biu.ac.il',
  'https://docs.google.com',
  'https://www.foodandwine.com/',
  'https://duckduckgo.com',
  'https://news.baidu.com',
  'https://drive.google.com',
  'https://app.gentlereader.com',
  'https://secure2.store.apple.com',
  'https://secure1.store.apple.com',
  'https://www.iyingdi.com',
  'https://www.dailykos.com',
  'http://blog.wilshipley.com',
  'https://app.yinxiang.com',
  'https://www.theladders.com',
  'https://www.cooksillustrated.com',
  'https://www.thekitchn.com',
  'https://www.xuexi.cn',
  'https://theinitium.com',
  'https://my.stridesapp.com',
  'https://www.gnu.org',
];

export const EMPTY_MERCURY_RESPONSE = {
  title: null,
  content: null,
  author: null,
  date_published: null,
  lead_image_url: null,
  dek: null,
  next_page_url: null,
  url: null,
  domain: null,
  excerpt: null,
  word_count: null,
  direction: null,
  total_pages: null,
  rendered_pages: null,
};

export function isURLBlacklisted(url) {
  for (let index = 0; index < URL_BLACKLIST.length; index += 1) {
    if (url.includes(URL_BLACKLIST[index])) {
      return true;
    }
  }

  return false;
}
