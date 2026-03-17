
import { ManualSection, SectionType } from './types';

export const MANUAL_DATA: ManualSection[] = [
  {
    id: SectionType.STARTUP,
    title: '1. はじめる準備（じゅんび）',
    icon: '🚀',
    pages: [
      {
        id: 'login',
        title: 'ログイン（はじめる）',
        content: 'タブレットをつかいはじめるときの 手順（じゅんじょ）です。',
        steps: [
          {
            number: 1,
            title: 'アプリを ひらく',
            description: 'タブレット画面の「OKProCon」アイコンを タップしてください。',
            // 高品質な工場のタブレット操作を想起させる画像
            image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000',
          },
          {
            number: 2,
            title: '番号を いれる',
            description: '入力欄（にゅうりょくらん）をタップして、「担当者コード」と「パスワード」を 数字でいれてください。',
            // 動画を追加する場合（例：短い操作ループ）
            video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', 
          },
          {
            number: 3,
            title: '「Login」を おす',
            description: '青色の「Login」ボタンを タップして、メイン画面へ すすみます。',
          }
        ],
        notes: ['番号を 3回 まちがえると ロックされます。リーダーに 言ってください。']
      },
      {
        id: 'machine-setup',
        title: '機械（きかい）の設定',
        content: 'どの機械で 作業するかを 登録します。',
        steps: [
          {
            number: 1,
            title: '設定（せってい）を ひらく',
            description: 'ログイン画面にある「歯車（はぐるま）」のアイコンを タップします。',
          },
          {
            number: 2,
            title: '機械の番号を いれる',
            description: '画面の まんなかにある「機械コード」を タップして、機械の番号を いれます。',
          },
          {
            number: 3,
            title: '保存（ほぞん）を おす',
            description: '右下の 青い「保存」ボタンを おしてください。一度やれば 次からは 不要（いらない）です。',
          }
        ]
      }
    ]
  },
  {
    id: 'preparation',
    title: '2. 作業をはじめる前',
    icon: '📋',
    pages: [
      {
        id: 'morning-check',
        title: 'はじめる前のチェック（点検）',
        content: '機械が 安全（あんぜん）に 動くか 確認（かくにん）します。',
        steps: [
          {
            number: 1,
            title: '「成型指示実績入力」を おす',
            description: 'メインメニューの 赤い手のアイコンを タップします。',
          },
          {
            number: 2,
            title: '「始業前点検」を おす',
            description: '画面の下にある「始業前点検」ボタンを タップします。',
          },
          {
            number: 3,
            title: '〇か×を 選ぶ',
            description: '点検項目（てんけんこうもく）をみて、OKなら「〇」を タップします。',
          },
          {
            number: 4,
            title: '「登録」を おす',
            description: 'すべて 終わったら 右下の 青い「登録」ボタンを おしてください。',
          }
        ],
        notes: ['×が 1つでもあると、作業を はじめることが できません。']
      }
    ]
  },
  {
    id: SectionType.MOLDING,
    title: '3. つくる（成形）',
    icon: '🛠️',
    pages: [
      {
        id: 'molding-start',
        title: '作業（さぎょう）を はじめる',
        content: '今日つくるものを 選んで、スタートします。',
        steps: [
          {
            number: 1,
            title: 'つくるものを 選ぶ',
            description: '「検索」をおして リストから 今日つくる製品を 選んでタップします。',
          },
          {
            number: 2,
            title: '「実績入力」を おす',
            description: '画面の下にある 青い「実績入力」を タップします。',
          },
          {
            number: 3,
            title: 'シフトを 選ぶ',
            description: '今の時間帯（A勤・B勤など）を選んで「決定」をおすと、記録（きろく）が はじまります。',
          }
        ]
      },
      {
        id: 'box-count',
        title: '箱（はこ）の数を いれる',
        content: '製品が いっぱいになったら、箱を 追加（ついか）します。',
        steps: [
          {
            number: 1,
            title: '箱の種類（しゅるい）を 選ぶ',
            description: '「正規容器（せいきようき）」か「仮容器（かりようき）」を タップします。',
          },
          {
            number: 2,
            title: '「＋１」を おす',
            description: '新しい箱を つかうときに「＋１」ボタンを 1回 おします。',
          }
        ],
        notes: [
          '予定の数より 多くなると、画面が オレンジ色に なります。',
          '箱を まちがえて ふやしたときは、「－１」を おしてください。'
        ]
      },
      {
        id: 'material-input',
        title: '材料（ざいりょう）を いれる',
        content: '機械に 材料を いれたときに 記録します。',
        steps: [
          {
            number: 1,
            title: '「材料払出投入」を おす',
            description: '画面の下にある 青いボタンを タップします。',
          },
          {
            number: 2,
            title: '袋（ふくろ）を チェックする',
            description: '材料の袋が 破（やぶ）れていないか、汚（よご）れていないか 確認します。',
          },
          {
            number: 3,
            title: '「投入（とうにゅう）」を おす',
            description: '入れた数を 数字でかいて、「投入」ボタンを タップします。',
          }
        ]
      }
    ]
  },
  {
    id: 'check-defect',
    title: '4. 不良（だめなもの）',
    icon: '⚠️',
    pages: [
      {
        id: 'defect-input',
        title: '不良（だめなもの）を いれる',
        content: 'きずや よごれが あるものの 数を いれます。',
        steps: [
          {
            number: 1,
            title: '「不良（ふりょう）」を おす',
            description: '画面の 下にある「不良」タブを タップします。',
          },
          {
            number: 2,
            title: '理由（りゆう）を 選ぶ',
            description: '「キズ」「シルバー」「異物（いぶつ）」など、だめだった理由を タップします。',
          },
          {
            number: 3,
            title: '数を いれて「登録」する',
            description: '数を いれて「ENTER」を おし、最後に「登録」を タップします。',
          }
        ]
      },
      {
        id: 'photo-record',
        title: '写真（しゃしん）を とる',
        content: 'だめなものの 状態（じょうたい）を 写真でのこします。',
        steps: [
          {
            number: 1,
            title: '「カメラ」を おす',
            description: '画面にある カメラのアイコンを タップします。',
          },
          {
            number: 2,
            title: '写真を とる',
            description: 'タブレットのカメラで 製品（せいひん）を 写します。',
          },
          {
            number: 3,
            title: '「保存（ほぞん）」する',
            description: 'きれいに 写っていたら「保存」を おしてください。',
          }
        ]
      }
    ]
  },
  {
    id: SectionType.ADMIN,
    title: '5. こうたい・おわり',
    icon: '🏁',
    pages: [
      {
        id: 'operator-change',
        title: '担当者を かえる（交代）',
        content: '次の人に 代わるときに 必ず おこなってください。',
        steps: [
          {
            number: 1,
            title: '「交代（こうたい）」を おす',
            description: '実績入力画面（じっせきにゅうりょくがめん）の 右上にある「交代」を おします。',
          },
          {
            number: 2,
            title: '次の人を 選ぶ',
            description: 'リストから、次に作業する人の 名前を 選んでください。',
          },
          {
            number: 3,
            title: '「決定（けってい）」を おす',
            description: '右上の 青いボタンを おして 完了（かんりょう）です。',
          }
        ]
      },
      {
        id: 'work-end',
        title: '作業（さぎょう）を おわらせる',
        content: 'その日の 仕事が 全部（ぜんぶ）おわったときです。',
        steps: [
          {
            number: 1,
            title: '「作業終了（さぎょうしゅうりょう）」を おす',
            description: '画面の左にある 赤い「作業終了」ボタンを タップします。',
          },
          {
            number: 2,
            title: '最後（さいご）の数を 確認する',
            description: 'つくった数と 箱の数が 合っているか 確認して「次へ」を おします。',
          },
          {
            number: 3,
            title: '「実績登録」を おす',
            description: '最後に 青い「実績登録」を おすと 画面が もどります。',
          }
        ],
        notes: ['予定 hostの数と ちがうときは、確認メッセージが 出ます。OKなら「OK」を おしてください。']
      }
    ]
  }
];
