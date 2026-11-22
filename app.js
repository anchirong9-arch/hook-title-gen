/* 후킹 제목 생성기 — 정적 웹 툴 (서버 없음) */
(() => {
  'use strict';

  /* ═════════════════════════════════════════
     데이터 — 카테고리(소재)
     hooks: 짤 상황을 그대로 옮긴 완결문 (제목 재료)
     ═════════════════════════════════════════ */
  const CAT = {
    pet: {
      label: '동물/반려', emoji: '🐶',
      kw: ['강아지', '고양이', '댕댕이'],
      tags: ['#강아지', '#고양이', '#반려동물', '#동물짤', '#댕댕이', '#냥냥이', '#집사일상', '#웃긴동물', '#반려견', '#반려묘', '#펫스타그램', '#동물영상'],
      hooks: [
        '우리 강아지 산책 나가자니까 3초 만에 배 깔고 누움',
        '고양이가 새벽 4시에 문 앞에서 계속 울음',
        '사료 그릇 비었다고 나 쳐다보는 눈빛',
        '병원 가기 싫어서 쇼파 밑으로 숨은 강아지',
        '목욕시키고 나왔더니 벽에 붙어서 안 나옴',
        '산책하다 다른 강아지 만나면 나를 잊는 내 새끼',
        '캣타워 사줬는데 박스만 파고 들어감',
        '간식 봉지 흔들었더니 0.5초 만에 도착함',
        '집사가 밥 먹으면 무조건 옆에 앉는 고양이',
        '발 닦으라고 하면 죽은 척하는 강아지',
        '동물병원 앞에서부터 몸이 굳는 댕댕이',
        '현관문 열리자마자 달려와서 발등 밟는 우리집 냥이'
      ]
    },
    frugal: {
      label: '거지방/가성비', emoji: '🪙',
      kw: ['가성비', '꿀템', '장바구니'],
      tags: ['#가성비', '#꿀템', '#거지방', '#살림템', '#내돈내산', '#가성비템', '#생활꿀팁', '#다이소', '#절약', '#알뜰살뜰', '#템추천', '#장바구니'],
      hooks: [
        '3천 원짜리로 한 끼 뚝딱하고 남은 돈으로 커피까지',
        '무료 배송 맞추려고 100원짜리 하나 더 담음',
        '이불 빨래 대신 3천 원짜리 담요 사는 게 이득인 이유',
        '쿠폰 3장 겹쳐서 결제액 4,900원 만든 날',
        '월급날인데 통장에 남은 돈 3만 원',
        '편의점 도시락 반값 시간만 기다리는 사람',
        '다이소 2천 원으로 주방 정리 끝냄',
        '택배비 아끼려고 장바구니에 똑같은 거 하나 더',
        '중고로 3,000원에 산 게 새것보다 좋았던 일',
        '냉장고 남은 재료로 1만 원 아낀 저녁',
        '세일 알림 뜨자마자 손가락이 먼저 움직임',
        '이거 비싼 거랑 똑같은데 만 원 더 쌈'
      ]
    },
    work: {
      label: '직장/알바/교대', emoji: '🕒',
      kw: ['야간근무', '교대근무', '알바'],
      tags: ['#직장인', '#알바', '#교대근무', '#야간근무', '#회사생활', '#직장인짤', '#월급', '#퇴근', '#야간알바', '#3교대', '#사회생활', '#직장인의하루'],
      hooks: [
        '야간 끝나고 아침 8시에 퇴근하는데 세상이 밝음',
        '야간 2일 차 되면 몸이 두 개로 갈라지는 느낌',
        '점심시간 끝나기 1분 전에 사장님 오심',
        '교대 바뀌는 주마다 생체 리듬이 초기화됨',
        '알바 첫날 이름표 붙이고 3시간 만에 포기함',
        '퇴근 10분 전에 갑자기 재고 정리하자는 말',
        '야간 근무 중 새벽 3시에 오는 그 손님',
        '월급 들어오자마자 카드값이 먼저 나감',
        '조출인 줄 모르고 시차 시간에 출근함',
        '휴무 2일 중 하루는 그냥 잠으로 사라짐',
        '교대 근무표 보고 내 주말이 언제인지 계산함',
        "사장님이 '잠깐만' 하시면 30분짜리 일이 됨"
      ]
    },
    love: {
      label: '연애/썸/달글', emoji: '💌',
      kw: ['연락', '썸', '카톡'],
      tags: ['#연애', '#썸', '#달글', '#연애상담', '#이별', '#남자친구', '#여자친구', '#커플', '#짝사랑', '#연락', '#썸타는중', '#연애이야기'],
      hooks: [
        '썸 타는데 답장이 3시간 걸리는 사람',
        "좋아한다고 말하려다 '밥은 먹었어'로 끝남",
        '읽씹 당하고 3일째 알림만 확인 중',
        '1년 사귀고 처음으로 생일 선물 고민함',
        "전남친이 보낸 '잘 지내?' 한 통에 하루 날림",
        '소개팅에서 첫마디로 전 직장 물어본 사람',
        '연락 빈도로 마음 확인하는 나',
        '데이트 비용 반반 하자고 했더니 표정이 굳음',
        '헤어지자고 한 사람이 더 보고 싶은 밤',
        '썸인지 친구인지 3개월째 모르는 사이',
        '카톡 프사 바꾸면 왜 먼저 알아채는지',
        '고백 타이밍만 세 번째 놓친 사람'
      ]
    },
    school: {
      label: '학교/시험', emoji: '📚',
      kw: ['기말고사', '과제', '자격증'],
      tags: ['#대학생', '#시험', '#기말고사', '#공부', '#학교', '#학생', '#자격증', '#과제', '#벼락치기', '#도서관', '#공시생', '#스터디'],
      hooks: [
        '시험 3일 남았는데 책 펴면 잠이 옴',
        '기말고사 범위가 1장부터 12장이라고 함',
        '과제 마감 30분 전에 처음 열어본 파일',
        '조별과제에서 제일 열심히 하는 척하는 사람',
        '자격증 시험 접수하고 하루 만에 후회함',
        '도서관 자리 잡고 3시간 동안 폰만 봄',
        "교수님이 '이건 시험에 안 나와요' 하면 불안",
        '수업 끝나고 바로 집 가려다 조 모임 잡힘',
        '벼락치기로 60점 넘기고 인생을 깨달음',
        '공부 계획표만 예쁘게 짜고 안 지킴',
        '기출 5회독 했는데 시험 문제가 낯설음',
        '시험 끝나고 나온 답안이 다 틀린 느낌'
      ]
    },
    daily: {
      label: '일상/병맛', emoji: '🫠',
      kw: ['일상', '출근', '폰'],
      tags: ['#일상', '#병맛', '#웃긴짤', '#짤', '#공감', '#드립', '#개그', '#자취', '#혼밥', '#무기력', '#일상기록', '#하루'],
      hooks: [
        '샤워하다 갑자기 인생 회의감이 몰려옴',
        '불 끄고 누웠는데 배달 앱이 먼저 열림',
        '알람 7개 맞춰놓고 마지막 알람에 일어남',
        '냉장고 열고 3초 서 있다가 그냥 닫음',
        '충전기 꽂으러 갔다가 폰 들고 옴',
        '월요일인 줄 알았는데 일요일이라 기분이 두 번 바뀜',
        '택배 왔다는 문자에만 인생의 낙을 느낌',
        '운동 가려고 운동복 입고 소파에 누움',
        '혼자 밥 먹으면서 짤 3개 연속 재생함',
        '쿠팡 결제 버튼 누르기 전 3분 고민',
        '할 일 목록 쓰고 목록만 5번 봄',
        '집에만 있으면 하루가 40분처럼 지나감'
      ]
    }
  };

  /* ───────── 톤 ───────── */
  const TONE = {
    fun: {
      label: '킹받음/웃김', emoji: '😂',
      comment: ['이거 보고 한참 웃었음', '오늘 웃음은 여기서 다 씀', '왜 웃긴지 모르겠는데 계속 보게 됨', '저장해두고 한 번 더 볼 짤'],
      ask: ['다들 이거 보면 어떰?', '오늘 이런 거 본 사람 있음?', '웃긴 거 더 있으면 댓글에 남겨줌', '이런 게 제일 무해함'],
      tags: ['#웃긴짤', '#병맛', '#개웃김', '#킹받네']
    },
    twist: {
      label: '반전/충격', emoji: '😳',
      comment: ['처음엔 별거 아닌 줄 알았는데', '끝까지 보면 생각이 바뀜', '앞부분만 보고 넘기면 아까움', '두 번째 보면 다른 게 보임'],
      ask: ['여러분은 어떻게 생각함?', '이거 진짜 이렇게 되는 거임?', '반전 예상한 사람 있음?', '여기서 포인트 놓친 사람?'],
      tags: ['#반전', '#실화냐', '#어이없네', '#충격']
    },
    empathy: {
      label: '공감/위로', emoji: '🫂',
      comment: ['요즘 다들 비슷한 하루 사는 것 같음', '이런 거 보면 좀 놓임', '나만 힘든 게 아니었음', '오늘도 잘 버틴 사람들'],
      ask: ['오늘 하루 어땠음?', '이런 날도 있는 거지 뭐', '다들 조금씩 그런 거 아닐까', '한 번쯤 겪어봤을 거임'],
      tags: ['#공감', '#위로', '#그럴수있지', '#다들그렇잖아']
    },
    info: {
      label: '정보/꿀팁', emoji: '💡',
      comment: ['웃긴데 실제로 도움 됨', '한 번 정리해 두면 편함', '알고 있으면 쓸 데 있음', '짤로 배우는 게 더 오래 남음'],
      ask: ['이거 알고 있었음?', '필요한 사람 있으면 저장해 둠', '다음에 한 번 써먹어 보셈', '더 좋은 방법 있으면 알려줌'],
      tags: ['#꿀팁', '#정보', '#알아두면좋은', '#정리']
    }
  };

  /* ───────── 제목 템플릿 (톤 × 유형) ───────── */
  const TITLE_T = {
    fun: {
      click: [
        '{hook} ㅋㅋㅋ 이거 실화냐',
        '{hook} 이건 좀 심하다',
        '{hook} 보고 3초 웃음 참음',
        '{k1:이/가} 이 난리 냈음',
        '{hook} 이게 말이 되나'
      ],
      question: [
        '{hook} 이거 저만 빡치나요?',
        '{hook} 이거 맞는 거임?',
        '{k1:은/는} 왜 이럼?',
        '이런 {k1} 본 적 있음?'
      ],
      empathy: [
        '{hook} 이거 나만 이런 거 아니지',
        '{hook} 이해하는 사람만 이해함',
        '{hook} 우리 다 같은 사람임',
        '{k1:은/는} 원래 이럼'
      ],
      info: [
        '{hook} 이렇게 대처하면 됨',
        '{hook} 3초 만에 정리됨',
        '{k1:이/가} 필요한 순간 있음',
        '{hook} 모르면 계속 당함'
      ]
    },
    twist: {
      click: [
        '{hook} 인데 결말이...',
        '{hook} 반전 있음',
        '{hook} 끝까지 봐야 함',
        '{k1} 이게 진짜였음'
      ],
      question: [
        '{hook} 이거 어떻게 생각함?',
        '{hook} 이거 믿어짐?',
        '{k1:이/가} 이게 맞는 건가?',
        '여러분 {k1} 이거 가능하다고 봄?'
      ],
      empathy: [
        '{hook} 이거 알고 나면 좀 다름',
        '{hook} 그럴 만했음',
        '{hook} 이유가 따로 있었음',
        '{k1} 이래서 그랬구나'
      ],
      info: [
        '{hook} 정리해 봄',
        '{hook} 3초면 이해됨',
        '{k1} 이렇게 되는 거였음',
        '{hook} 이거 몰랐으면 손해'
      ]
    },
    empathy: {
      click: [
        '{hook} 이거 나만 그런 거 아니지?',
        '{hook} 이거 보면 마음이 좀 놓임',
        '{hook} 다들 이러고 사는 거 맞지',
        '{k1:은/는} 좀 힘들었겠다'
      ],
      question: [
        '{hook} 나만 이런 거 아니지?',
        '{hook} 이거 나만 힘든 거임?',
        '{k1} 이거 다들 겪어봄?',
        '이런 {k1} 있으면 어떻게 함?'
      ],
      empathy: [
        '{hook} 괜찮다고 말해주고 싶음',
        '{hook} 그 마음 알 것 같음',
        '{hook} 우리 모두 수고했음',
        '{k1} 이거 진짜 공감됨'
      ],
      info: [
        '{hook} 이럴 땐 이렇게 하자',
        '{hook} 3분만 정리해 보셈',
        '{k1} 이거 하나만 기억하셈',
        '{hook} 생각보다 간단함'
      ]
    },
    info: {
      click: [
        '{hook} 이 방법 하나로 끝남',
        '{hook} 이거 모르면 계속 손해',
        '{k1} 이렇게 하면 달라짐',
        '{hook} 3초면 해결됨'
      ],
      question: [
        '{hook} 이거 왜 이런지 앎?',
        '{hook} 이거 아는 사람 있음?',
        '{k1} 이거 제대로 쓰고 있음?',
        '{k1} 어떻게 쓰는지 앎?'
      ],
      empathy: [
        '{hook} 이거 알면 편해짐',
        '{hook} 이거 하나만 바꿔도 됨',
        '{k1} 이거 은근히 다들 모름',
        '{hook} 진짜 별거 아님'
      ],
      info: [
        '{hook} 정리해 봄',
        '{hook} 3단계면 끝',
        '{k1} 쓰는 순서 정리',
        '{k1} 이거만 알면 됨'
      ]
    }
  };

  /* ───────── 썸네일 문구 템플릿 (12~16자 지향) ───────── */
  const BAND_T = {
    fun: [
      '오늘 {k1} 실화냐ㅋㅋ',
      '{k1} 보고 빡친 사람?',
      '{k1} 이건 좀 못 참지',
      '{k1} 레전드 갱신했음',
      '{k1} 오늘도 사고 쳤음'
    ],
    twist: [
      '{k1} 반전 있음 ㄷㄷ',
      '{k1} 이게 맞나 싶다',
      '{k1} 진짜 이거 맞음?',
      '{k1} 알고 보면 다름 ㅋㅋ'
    ],
    empathy: [
      '{k1} 이거 나만 이럼?',
      '{k1} 공감 100%임 진짜',
      '{k1} 이럴 땐 다 이렇잖아',
      '{k1} 이거 진짜 공감됨'
    ],
    info: [
      '{k1} 꿀팁 하나 정리함',
      '{k1} 이거 모르면 손해',
      '{k1} 이거 3초면 정리됨',
      '{k1} 이거 제대로 쓰는 법'
    ]
  };
  const BAND_GENERIC = [
    '{k1} 이거 봐라 진짜로',
    '{k1} 하나로 난리 났음',
    '{k1} 이거 좀 대박임',
    '{k1} 오늘 뭐 했냐면'
  ];

  const TYPE_LABEL = { click: '클릭유도', question: '질문', empathy: '공감', info: '정보' };
  const TYPE_ORDER = ['click', 'click', 'click', 'question', 'question', 'empathy', 'empathy', 'info', 'info'];

  /* ═════════════════════════════════════════
     상태 · 저장
     ═════════════════════════════════════════ */
  const LS = {
    fav: 'hookgen.favs.v1',
    preset: 'hookgen.presets.v1',
    input: 'hookgen.inputs.v1'
  };
  const state = { cat: 'pet', tone: 'fun', kwRaw: '', pno: '', linkOn: true, adOn: true };
  let out = null;

  const $ = (sel) => document.querySelector(sel);
  const el = (tag, cls, txt) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (txt != null) n.textContent = txt;
    return n;
  };
  const rand = (n) => Math.floor(Math.random() * n);
  const pick = (arr) => arr[rand(arr.length)];
  const shuffle = (arr) => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = rand(i + 1);
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  const uniq = (arr) => arr.filter((v, i) => arr.indexOf(v) === i);

  /* 받침에 맞춰 조사를 붙임 — '{k1:은/는}' 처럼 씀 */
  function josa(word, pair) {
    const p = String(pair).split('/');
    const s = String(word || '').trim();
    if (!s) return '';
    const c = s.charCodeAt(s.length - 1);
    let part = p[0];
    if (c >= 0xAC00 && c <= 0xD7A3) part = ((c - 0xAC00) % 28) ? p[0] : (p[1] || p[0]);
    return s + part;
  }

  function fill(tpl, vars) {
    return tpl.replace(/\{(hook|k1|k2|k3):([가-힣/]+)\}/g, (_, k, pair) => josa(vars[k], pair))
      .replace(/\{(hook|k1|k2|k3)\}/g, (_, k) => vars[k] || '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  /* 16자 이내로 다듬기 — 단어 중간에서 자르지 않게 */
  function fit(text, max) {
    let s = text.replace(/\s+/g, ' ').trim();
    if (s.length <= max) return s;
    let cut = s.slice(0, max);
    const sp = cut.lastIndexOf(' ');
    if (sp >= Math.floor(max * 0.55)) cut = cut.slice(0, sp);
    return cut.replace(/[\s,·~!?…]+$/, '');
  }

  function readStore(key, fallback) {
    try {
      const v = JSON.parse(localStorage.getItem(key));
      return v == null ? fallback : v;
    } catch (e) { return fallback; }
  }
  function writeStore(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) {}
  }

  /* ═════════════════════════════════════════
     입력 읽기 · 생성
     ═════════════════════════════════════════ */
  function keywords() {
    return state.kwRaw.split(/[,，\n]/).map((s) => s.trim()).filter(Boolean).slice(0, 3);
  }
  function resolvedKw() {
    const own = keywords();
    const base = CAT[state.cat].kw;
    const list = own.length ? own.concat(base) : base.slice();
    return [list[0], list[1] || list[0], list[2] || list[1] || list[0]];
  }
  function productNo() {
    const d = (state.pno || '').replace(/[^0-9]/g, '');
    if (!d) return '';
    return d.length <= 2 ? d.padStart(3, '0') : d;
  }

  function makeTitles(kw) {
    const hooks = shuffle(CAT[state.cat].hooks);
    let hi = 0;
    let kwOnly = 0;
    const usedHooks = new Set();
    const usedTpl = new Set();
    const usedText = new Set();
    const list = [];

    for (const type of TYPE_ORDER) {
      const pool = shuffle(TITLE_T[state.tone][type]);
      for (const tpl of pool) {
        if (usedTpl.has(tpl)) continue;
        const usesHook = /\{hook\}/.test(tpl);
        if (!usesHook && kwOnly >= 2) continue;
        let hook = hooks[hi++ % hooks.length];
        if (usedHooks.has(hook) && usedHooks.size < hooks.length) {
          hook = hooks.find((h) => !usedHooks.has(h)) || hook;
        }
        const text = fill(tpl, { hook, k1: kw[0], k2: kw[1], k3: kw[2] });
        if (usedText.has(text)) continue;
        usedText.add(text);
        usedTpl.add(tpl);
        usedHooks.add(hook);
        if (!usesHook) kwOnly++;
        list.push({ text, type });
        break;
      }
    }
    return list;
  }

  function makeBands(kw) {
    const pool = shuffle(BAND_T[state.tone].concat(BAND_GENERIC));
    const k = kw[0].length > 9 ? kw[0].slice(0, 9) : kw[0];
    const seen = new Set();
    const good = [];
    const ok = [];
    for (const tpl of pool) {
      const text = fit(fill(tpl, { k1: k }), 16);
      if (seen.has(text)) continue;
      seen.add(text);
      (text.length >= 12 ? good : ok).push(text);
    }
    const bands = good.concat(ok).slice(0, 5);
    while (bands.length < 5) bands.push(fit(`${k} 이거 봐라 진짜로 ${bands.length}`, 16));
    return bands;
  }

  function tagSet(catTags, toneTags, n) {
    const pool = uniq(shuffle(catTags.slice(0, 8)).concat(toneTags, shuffle(catTags.slice(8))));
    return pool.slice(0, n);
  }

  function buildPlatforms(titles, kw) {
    const cat = CAT[state.cat];
    const tone = TONE[state.tone];
    const title = titles[0].text;
    const comment = pick(tone.comment);
    const ask = pick(tone.ask);
    const no = productNo();
    const pnoLabel = no || '{번호}';
    const linkLine = state.linkOn ? `상품이 궁금하면 프로필 링크에서 ${pnoLabel}번!` : '';
    const adLine = state.adOn ? '[광고 포함]' : '';
    const tagLine = (n, extra) => uniq((extra || []).concat(tagSet(cat.tags, tone.tags, n))).join(' ');
    const tidy = (parts) => parts.filter(Boolean).join('\n').replace(/\n{3,}/g, '\n\n').trim();

    return {
      threads: {
        name: '쓰레드', icon: '🧵', note: '링크는 첫 답글에',
        body: tidy([
          title,
          comment,
          '',
          ask,
          state.linkOn ? linkLine : '',
          adLine,
          '',
          tagLine(4)
        ])
      },
      youtube: {
        name: '유튜브 커뮤니티·쇼츠', icon: '▶', note: '사진은 최대 10장',
        body: tidy([
          title,
          comment,
          '',
          linkLine,
          '짤 더 보려면 구독해두면 됨',
          adLine,
          '',
          tagLine(6)
        ])
      },
      tiktok: {
        name: '틱톡', icon: '🎵', note: '캡션 URL은 클릭 안 됨',
        body: tidy([
          title,
          comment,
          state.linkOn ? `프로필 링크에서 ${pnoLabel}번 확인!` : '프로필 링크에 모아둠',
          adLine,
          '',
          tagLine(5)
        ])
      },
      instagram: {
        name: '인스타', icon: '◎', note: '짤만 올리는 계정이면 사진만',
        body: tidy([
          title,
          '.',
          comment,
          '',
          tagLine(9, state.adOn ? ['#광고'] : [])
        ])
      }
    };
  }

  function generate() {
    const kw = resolvedKw();
    const titles = makeTitles(kw);
    const bands = makeBands(kw);
    out = { kw, titles, bands, platforms: buildPlatforms(titles, kw) };
    renderResults();
  }

  /* 링크·광고 토글은 제목을 그대로 두고 본문만 다시 */
  function refreshBodies() {
    if (!out) return generate();
    out.platforms = buildPlatforms(out.titles, out.kw);
    renderResults();
  }

  /* ═════════════════════════════════════════
     렌더 — 칩
     ═════════════════════════════════════════ */
  function renderChips() {
    const catBox = $('#catChips');
    catBox.innerHTML = '';
    Object.entries(CAT).forEach(([key, c]) => {
      const b = el('button', 'chip' + (state.cat === key ? ' on' : ''));
      b.type = 'button';
      b.setAttribute('role', 'radio');
      b.setAttribute('aria-checked', String(state.cat === key));
      b.dataset.cat = key;
      b.append(el('span', 'em', c.emoji), el('span', '', c.label));
      catBox.append(b);
    });

    const toneBox = $('#toneChips');
    toneBox.innerHTML = '';
    Object.entries(TONE).forEach(([key, t]) => {
      const b = el('button', 'chip' + (state.tone === key ? ' on' : ''));
      b.type = 'button';
      b.setAttribute('role', 'radio');
      b.setAttribute('aria-checked', String(state.tone === key));
      b.dataset.tone = key;
      b.append(el('span', 'em', t.emoji), el('span', '', t.label));
      toneBox.append(b);
    });
  }

  function renderKwSuggest() {
    const box = $('#kwSuggest');
    box.innerHTML = '';
    CAT[state.cat].kw.concat(CAT[state.cat].tags.slice(0, 2).map((t) => t.slice(1)))
      .slice(0, 5)
      .forEach((w) => {
        const b = el('button', '', '+' + w);
        b.type = 'button';
        b.addEventListener('click', () => {
          const cur = keywords();
          if (cur.indexOf(w) !== -1) return toast('이미 들어 있음');
          if (cur.length >= 3) return toast('키워드는 3개까지');
          cur.push(w);
          state.kwRaw = cur.slice(0, 3).join(', ');
          $('#kwInput').value = state.kwRaw;
          saveInput();
          generate();
        });
        box.append(b);
      });
  }

  /* ═════════════════════════════════════════
     렌더 — 결과
     ═════════════════════════════════════════ */
  function renderResults() {
    if (!out) return;
    const cat = CAT[state.cat];
    const tone = TONE[state.tone];
    const ownKw = keywords();
    $('#resMeta').innerHTML = '';
    const meta = el('span');
    meta.append(
      document.createTextNode(`${cat.emoji} `),
      el('b', '', cat.label),
      document.createTextNode(` · ${tone.label} · `),
      el('b', '', (ownKw.length ? ownKw : out.kw.slice(0, 3)).join(', ')),
      document.createTextNode(ownKw.length ? '' : ' (카테고리 기본)')
    );
    if (state.linkOn && !productNo()) meta.append(document.createTextNode(' · 상품 번호를 넣으면 {번호} 자리에 채워짐'));
    $('#resMeta').append(meta);

    // 제목
    const tl = $('#titleList');
    tl.innerHTML = '';
    out.titles.forEach((t, i) => {
      const li = el('li');
      li.append(el('span', 'idx', String(i + 1)));
      const body = el('div', 't-body');
      body.append(el('span', 't-type type-' + t.type, TYPE_LABEL[t.type]));
      const line = el('div');
      const txt = el('span', 't-text' + (t.text.length > 40 ? ' over' : ''), t.text);
      line.append(txt, el('span', 't-len', t.text.length + '자'));
      body.append(line);
      li.append(body);
      li.append(starBtn(t.text, 'title', t.type));
      li.append(copyBtn(t.text, '제목'));
      tl.append(li);
    });
    $('#titleCnt').textContent = out.titles.length;

    // 썸네일 문구
    const bl = $('#bandList');
    bl.innerHTML = '';
    out.bands.forEach((b) => {
      const li = el('li');
      li.append(el('span', 'band-txt', b));
      const len = b.length;
      li.append(el('span', 'band-len ' + (len >= 12 ? 'ok' : 'low'), `${len}/16`));
      li.append(copyBtn(b, '문구'));
      bl.append(li);
    });
    $('#bandCnt').textContent = out.bands.length;

    // 플랫폼
    const pl = $('#platformList');
    pl.innerHTML = '';
    ['threads', 'youtube', 'tiktok', 'instagram'].forEach((key) => {
      const p = out.platforms[key];
      const box = el('div', 'pblock');
      const head = el('div', 'pblock-head');
      const name = el('span', 'pname');
      name.append(el('span', 'pico', p.icon), el('span', '', p.name));
      head.append(name, el('span', 'pnote', p.note));
      const btn = el('button', 'btn ghost sm', '복사');
      btn.type = 'button';
      btn.addEventListener('click', () => copyText(p.body, p.name + ' 본문 복사됨'));
      head.append(btn);
      box.append(head, el('pre', 'pbody', p.body));
      pl.append(box);
    });
  }

  function copyBtn(text, label) {
    const b = el('button', 'icon-btn', '⧉');
    b.type = 'button';
    b.title = label + ' 복사';
    b.setAttribute('aria-label', label + ' 복사');
    b.addEventListener('click', () => copyText(text, label + ' 복사됨'));
    return b;
  }

  function starBtn(text, kind, type) {
    const b = el('button', 'icon-btn', '☆');
    b.type = 'button';
    b.title = '즐겨찾기';
    b.setAttribute('aria-label', '즐겨찾기에 담기');
    const on = () => favs().some((f) => f.text === text);
    if (on()) b.classList.add('on'), (b.textContent = '★');
    b.addEventListener('click', () => {
      const list = favs();
      const i = list.findIndex((f) => f.text === text);
      if (i === -1) {
        list.unshift({ text, kind, type: type || '', cat: state.cat, tone: state.tone, at: Date.now() });
        toast('즐겨찾기에 담음');
      } else {
        list.splice(i, 1);
        toast('즐겨찾기에서 뺌');
      }
      writeStore(LS.fav, list);
      b.classList.toggle('on', i === -1);
      b.textContent = i === -1 ? '★' : '☆';
      renderFavs();
    });
    return b;
  }

  /* ═════════════════════════════════════════
     복사 · 토스트
     ═════════════════════════════════════════ */
  let toastTimer = null;
  function toast(msg) {
    const t = $('#toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 1600);
  }

  function fallbackCopy(text) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.cssText = 'position:fixed;top:0;left:0;opacity:0';
    document.body.append(ta);
    ta.select();
    let ok = false;
    try { ok = document.execCommand('copy'); } catch (e) {}
    ta.remove();
    return ok;
  }

  function copyText(text, msg) {
    const done = () => toast(msg || '복사됨');
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, () => {
        if (fallbackCopy(text)) done(); else toast('복사 실패 — 길게 눌러 선택');
      });
    } else if (fallbackCopy(text)) {
      done();
    } else {
      toast('복사 실패 — 길게 눌러 선택');
    }
  }

  function fullText() {
    if (!out) return '';
    const lines = [];
    lines.push('■ 후킹 제목');
    out.titles.forEach((t, i) => lines.push(`${i + 1}. ${t.text}`));
    lines.push('', '■ 썸네일 문구');
    out.bands.forEach((b) => lines.push('· ' + b));
    ['threads', 'youtube', 'tiktok', 'instagram'].forEach((k) => {
      const p = out.platforms[k];
      lines.push('', `■ ${p.name}`, p.body);
    });
    return lines.join('\n');
  }

  /* ═════════════════════════════════════════
     즐겨찾기 · 프리셋
     ═════════════════════════════════════════ */
  function favs() { return readStore(LS.fav, []); }

  function renderFavs() {
    const list = favs();
    $('#favCount').textContent = String(list.length);
    const box = $('#favList');
    box.innerHTML = '';
    list.forEach((f) => {
      const row = el('div', 'fav');
      const body = el('div', 'fav-body');
      const kind = f.kind === 'band' ? '썸네일 문구' : '제목';
      body.append(el('div', 'fav-kind', kind + (TYPE_LABEL[f.type] ? ' · ' + TYPE_LABEL[f.type] : '')), el('div', 'fav-text', f.text));
      const cp = el('button', 'icon-btn', '⧉');
      cp.type = 'button';
      cp.title = '복사';
      cp.addEventListener('click', () => copyText(f.text, '복사됨'));
      const del = el('button', 'icon-btn', '✕');
      del.type = 'button';
      del.title = '삭제';
      del.addEventListener('click', () => {
        writeStore(LS.fav, favs().filter((x) => x.at !== f.at));
        renderFavs();
        renderResults();
      });
      row.append(body, cp, del);
      box.append(row);
    });
  }

  function presets() { return readStore(LS.preset, []); }

  function renderPresets() {
    const box = $('#presetList');
    box.innerHTML = '';
    presets().forEach((p) => {
      const wrap = el('span', 'preset');
      const apply = el('button', 'apply', p.name);
      apply.type = 'button';
      apply.addEventListener('click', () => {
        state.cat = p.cat; state.tone = p.tone; state.kwRaw = p.kwRaw || '';
        state.pno = p.pno || ''; state.linkOn = p.linkOn !== false; state.adOn = p.adOn !== false;
        syncInputs();
        renderChips(); renderKwSuggest(); saveInput(); generate();
        toast(`프리셋 적용 · ${p.name}`);
      });
      const del = el('button', 'del', '✕');
      del.type = 'button';
      del.title = '프리셋 삭제';
      del.addEventListener('click', () => {
        writeStore(LS.preset, presets().filter((x) => x.at !== p.at));
        renderPresets();
      });
      wrap.append(apply, del);
      box.append(wrap);
    });
  }

  function syncInputs() {
    $('#kwInput').value = state.kwRaw;
    $('#pnoInput').value = state.pno;
    $('#linkOn').checked = state.linkOn;
    $('#adOn').checked = state.adOn;
  }

  function saveInput() {
    writeStore(LS.input, { cat: state.cat, tone: state.tone, kwRaw: state.kwRaw, pno: state.pno, linkOn: state.linkOn, adOn: state.adOn });
  }

  /* ═════════════════════════════════════════
     이벤트
     ═════════════════════════════════════════ */
  function bind() {
    $('#catChips').addEventListener('click', (e) => {
      const b = e.target.closest('[data-cat]');
      if (!b) return;
      state.cat = b.dataset.cat;
      renderChips(); renderKwSuggest(); saveInput(); generate();
    });
    $('#toneChips').addEventListener('click', (e) => {
      const b = e.target.closest('[data-tone]');
      if (!b) return;
      state.tone = b.dataset.tone;
      renderChips(); saveInput(); generate();
    });

    const kwInput = $('#kwInput');
    kwInput.addEventListener('input', () => { state.kwRaw = kwInput.value; saveInput(); });
    kwInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); generate(); } });

    const pno = $('#pnoInput');
    pno.addEventListener('input', () => {
      const digits = pno.value.replace(/[^0-9]/g, '').slice(0, 6);
      pno.value = digits;
      state.pno = digits; saveInput();
    });
    pno.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); generate(); } });

    $('#linkOn').addEventListener('change', (e) => { state.linkOn = e.target.checked; saveInput(); refreshBodies(); });
    $('#adOn').addEventListener('change', (e) => { state.adOn = e.target.checked; saveInput(); refreshBodies(); });

    $('#genBtn').addEventListener('click', () => { generate(); toast('새로 뽑음'); });
    $('#reroll').addEventListener('click', () => { generate(); toast('새로 뽑음'); });

    $('#copyAll').addEventListener('click', () => {
      if (!out) generate();
      copyText(fullText(), '전체 복사됨');
    });

    // 즐겨찾기 서랍
    const openFav = (open) => {
      $('#favDrawer').classList.toggle('open', open);
      $('#favDrawer').setAttribute('aria-hidden', String(!open));
      $('#favBg').hidden = !open;
      document.body.style.overflow = open ? 'hidden' : '';
      if (open) renderFavs();
    };
    $('#favOpen').addEventListener('click', () => openFav(true));
    $('#favClose').addEventListener('click', () => openFav(false));
    $('#favBg').addEventListener('click', () => openFav(false));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') openFav(false); });

    $('#favCopyAll').addEventListener('click', () => {
      const list = favs();
      if (!list.length) return toast('즐겨찾기가 비어 있음');
      copyText(list.map((f) => f.text).join('\n'), `즐겨찾기 ${list.length}개 복사됨`);
    });
    $('#favClear').addEventListener('click', () => {
      if (!favs().length) return toast('즐겨찾기가 비어 있음');
      writeStore(LS.fav, []);
      renderFavs(); renderResults();
      toast('즐겨찾기 비움');
    });

    $('#presetSave').addEventListener('click', () => {
      const nameInput = $('#presetName');
      const name = nameInput.value.trim() || `${CAT[state.cat].label}·${TONE[state.tone].label}`;
      const list = presets();
      list.unshift({ name, cat: state.cat, tone: state.tone, kwRaw: state.kwRaw, pno: state.pno, linkOn: state.linkOn, adOn: state.adOn, at: Date.now() });
      writeStore(LS.preset, list.slice(0, 12));
      nameInput.value = '';
      renderPresets();
      toast('프리셋 저장됨');
    });
    $('#presetName').addEventListener('keydown', (e) => { if (e.key === 'Enter') $('#presetSave').click(); });
  }

  /* ═════════════════════════════════════════
     부팅 — 저장값 · URL 파라미터 복원
     ═════════════════════════════════════════ */
  function boot() {
    const saved = readStore(LS.input, null);
    if (saved) {
      if (CAT[saved.cat]) state.cat = saved.cat;
      if (TONE[saved.tone]) state.tone = saved.tone;
      state.kwRaw = typeof saved.kwRaw === 'string' ? saved.kwRaw : '';
      state.pno = typeof saved.pno === 'string' ? saved.pno : '';
      state.linkOn = saved.linkOn !== false;
      state.adOn = saved.adOn !== false;
    }

    // URL 파라미터 (?cat=daily&tone=twist&kw=출근,폰&pno=021&link=0&ad=0)
    const q = new URLSearchParams(location.search);
    if (CAT[q.get('cat')]) state.cat = q.get('cat');
    if (TONE[q.get('tone')]) state.tone = q.get('tone');
    if (q.has('kw')) state.kwRaw = q.get('kw');
    if (q.has('pno')) state.pno = (q.get('pno') || '').replace(/[^0-9]/g, '');
    if (q.has('link')) state.linkOn = q.get('link') !== '0';
    if (q.has('ad')) state.adOn = q.get('ad') !== '0';

    syncInputs();
    renderChips();
    renderKwSuggest();
    renderFavs();
    renderPresets();
    bind();
    generate();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
