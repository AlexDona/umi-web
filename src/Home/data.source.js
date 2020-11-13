import React from 'react';

export const Nav00DataSource = {
  wrapper: { className: 'header0 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header0-logo',
    children: require('../img/logo.svg'),
  },
  Menu: {
    className: 'header0-menu',
    children: [
      {
        name: 'item0',
        className: 'header0-item',
        children: {
          href: '#',
          children: [
            {
              children: (
                <span>
                  <p style={{ fontSize: '18px' }}>首页</p>
                </span>
              ),
              name: 'text',
            },
          ],
        },
        // subItem: [
        //   {
        //     name: 'sub0',
        //     className: 'item-sub',
        //     children: {
        //       className: 'item-sub-item',
        //       children: [
        //         {
        //           name: 'image0',
        //           className: 'item-image',
        //           children:
        //             'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
        //         },
        //         {
        //           name: 'title',
        //           className: 'item-title',
        //           children: 'Ant Design',
        //         },
        //         {
        //           name: 'content',
        //           className: 'item-content',
        //           children: '企业级 UI 设计体系',
        //         },
        //       ],
        //     },
        //   },
        //   {
        //     name: 'sub1',
        //     className: 'item-sub',
        //     children: {
        //       className: 'item-sub-item',
        //       children: [
        //         {
        //           name: 'image0',
        //           className: 'item-image',
        //           children:
        //             'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
        //         },
        //         {
        //           name: 'title',
        //           className: 'item-title',
        //           children: 'Ant Design',
        //         },
        //         {
        //           name: 'content',
        //           className: 'item-content',
        //           children: '企业级 UI 设计体系',
        //         },
        //       ],
        //     },
        //   },
        // ],
      },
      {
        name: 'item1',
        className: 'header0-item',
        children: {
          children: [
            {
              children: (
                <span>
                  <p style={{ fontSize: '18px' }}>ADEC</p>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'item2',
        className: 'header0-item',
        children: {
          href: '#',
          children: [
            {
              children: (
                <span>
                  <p style={{ fontSize: '18px' }}>河图生态</p>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'item3',
        className: 'header0-item',
        children: {
          href: '#',
          children: [
            {
              children: (
                <span>
                  <span>
                    <p style={{ fontSize: '18px' }}>数字赋能</p>
                  </span>
                </span>
              ),
              name: 'text',
              className: 'kgqdxuk9bpg-editor_css',
            },
          ],
        },
      },
      {
        name: 'item4',
        className: 'header0-item',
        children: {
          href: '#',
          children: [
            {
              children: (
                <span>
                  <span>
                    <p style={{ fontSize: '18px' }}>关于我们</p>
                  </span>
                </span>
              ),
              name: 'text',
              className: 'kgqdxuk9bpg-editor_css',
            },
          ],
        },
      },
    ],
  },
  mobileMenu: { className: 'header0-mobile-menu' },
};

// export const Teams10DataSource = {
//   wrapper: { className: 'home-page-wrapper teams1-wrapper' },
//   page: { className: 'home-page teams1 kgqo40xyt-editor_css' },
//   OverPack: { playScale: 0.3, className: '' },
//   titleWrapper: {
//     className: 'title-wrapper',
//     children: [
//       {
//         name: 'title',
//         children: (
//           <span>
//             <span>
//               <p>ADEC</p>
//             </span>
//           </span>
//         ),
//         className: 'kgqnyksd4ne-editor_css',
//       },
//       {
//         name: 'content~kgqo7f7d5mi',
//         className: 'kgqo7gbxwb-editor_css',
//         children: (
//           <span>
//             <p>
//               亚洲数字经济合作组织（Asia Digital Economic Cooperation,
//               简称“ADEC”），是由亚洲财经国际集团有限公司主导发起、多个洲际政府、
//               机构和组织共同参与成立的、以数字经济驱动全球经济一体化的综合性NGO（非政府组织）。
//             </p>
//           </span>
//         ),
//       },
//     ],
//   },
//   block: {
//     className: 'block-wrapper kgqnyeg7q2h-editor_css',
//     children: [
//       {
//         name: 'block0',
//         className: 'block kgqo1d3z3a-editor_css',
//         md: 6,
//         xs: 24,
//         titleWrapper: {
//           children: [
//             {
//               name: 'image',
//               className: 'teams1-image kgqny66lo7-editor_css',
//               children:
//                 'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
//             },
//             {
//               name: 'title',
//               className: 'teams1-title',
//               children: (
//                 <span>
//                   <p>组织宗旨</p>
//                 </span>
//               ),
//             },
//             {
//               name: 'content1',
//               className: 'teams1-content kgqo0ighfm-editor_css',
//               children: (
//                 <span>
//                   <p>打造全球首个去边界的 数字经济产融自贸区</p>
//                 </span>
//               ),
//             },
//           ],
//         },
//       },
//       {
//         name: 'block1',
//         className: 'block',
//         md: 6,
//         xs: 24,
//         titleWrapper: {
//           children: [
//             {
//               name: 'image',
//               className: 'teams1-image',
//               children:
//                 'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ',
//             },
//             {
//               name: 'title',
//               className: 'teams1-title',
//               children: (
//                 <span>
//                   <p>基本职能</p>
//                 </span>
//               ),
//             },
//             {
//               name: 'content',
//               className: 'teams1-job kgqo205pnd-editor_css',
//               children: (
//                 <span>
//                   <p>管理、组织、协调、调节、 提供五大职能</p>
//                 </span>
//               ),
//             },
//           ],
//         },
//       },
//       {
//         name: 'block~kgqo3q82xml',
//         className: 'block',
//         md: 6,
//         xs: 24,
//         titleWrapper: {
//           children: [
//             {
//               name: 'image',
//               className: 'teams1-image',
//               children:
//                 'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
//             },
//             {
//               name: 'title',
//               className: 'teams1-title',
//               children: (
//                 <span>
//                   <p>战略布局</p>
//                 </span>
//               ),
//             },
//             {
//               name: 'content',
//               className: 'teams1-job kgqo8vxd0zr-editor_css',
//               children: (
//                 <span>
//                   <p>以协同共建共享为核心 构建数字经济产业生态</p>
//                 </span>
//               ),
//             },
//           ],
//         },
//       },
//       {
//         name: 'block2',
//         className: 'block',
//         md: 6,
//         xs: 24,
//         titleWrapper: {
//           children: [
//             {
//               name: 'image',
//               className: 'teams1-image',
//               children:
//                 'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
//             },
//             {
//               name: 'title',
//               className: 'teams1-title',
//               children: (
//                 <span>
//                   <p>战略布局</p>
//                 </span>
//               ),
//             },
//             {
//               name: 'content',
//               className: 'teams1-job kgqo2wqnz6-editor_css',
//               children: (
//                 <span>
//                   <p>以协同共建共享为核心 构建数字经济产业生态</p>
//                 </span>
//               ),
//             },
//           ],
//         },
//       },
//     ],
//   },
// };
