import { CatechismItem } from './types'
// https://baptistcatechism.org/${this.number}/#beddome

const coloring = [
  "Links to every coloring page indexed",
  "https://drive.google.com/file/d/1D7U_S1mtC7J_ZzYB0stnbwaV1IgHCbiQ",
  "https://drive.google.com/file/d/1tRNxzVr6xWS1HJIw79eOx0sK-Jb1iC6l",
  "https://drive.google.com/file/d/1XBvCzWH9ZaZA-M-CEKoqmwVx9HTtNMmx",
  "https://drive.google.com/file/d/1qApGHWazAyewLI5YGFM-M7RVipOzVlsB",
  "https://drive.google.com/file/d/1x5pMjdL-xJoA6Ja_G4IpX82d3DslxV4T",
  "https://drive.google.com/file/d/1X5nwzoQrTdO3bSXwqsRHi0zELQ8GVdhD",
  "https://drive.google.com/file/d/1Unz27QWuySGHPyOwh4CxMeDrZr7q-Vqe",
  "https://drive.google.com/file/d/1BTE0SdHCpoDgUbizYJt42M6X-1HiIDRj",
  "https://drive.google.com/file/d/1FsoSSwkwICtF87ReN8xM3hD7-uNCVv-e",
  "https://drive.google.com/file/d/1NPj1aPzLkxqYDbRinZcWPrOk82jEE_dF",
  "https://drive.google.com/file/d/19qM7F0e32nL93RxIa-uZONlwfsZCzPev",
  "https://drive.google.com/file/d/1BEk4JrRx8O71w4njAeZt1BmHCJCpbXYo",
  "https://drive.google.com/file/d/1JpGD7cPBIG63sxYq2cnOEc_g35P40zIP",
  "https://drive.google.com/file/d/1GaJqlTyJOKnh25MpbwpafWfsdLVv-ur7",
  "https://drive.google.com/file/d/1XvmbfoBvSqn0bvGk1c1jBydPA_W7Vrb5",
  "https://drive.google.com/file/d/10kq_ZPB2mFq76dDFkpmZl35zQV-kVH_c",
  "https://drive.google.com/file/d/1CRVWrhrQxDOVauvdAH52fCuJ2VM4T_iW",
  "https://drive.google.com/file/d/16sjaOHSbIxJfZle5-13EQ6db52mPV7MM",
  "https://drive.google.com/file/d/1-j0IJKsV4P0yEH_vyTgozVMZKTGw_V-y",
  "https://drive.google.com/file/d/1Wd5DZg-a54hWmTd22YCkaUrHF5Z0pSHb",
  "https://drive.google.com/file/d/1660bqoS4pZTZpcBIUKgHJNnWrt1GcJnY",
  "https://drive.google.com/file/d/1OZ9JxLXkP7RrNL8bocqhyKKROdbn8B05",
  "https://drive.google.com/file/d/1tLoQCM8YyC__1R9uheCDy1oANngqZZFA",
  "https://drive.google.com/file/d/1-hqcUzLc8lRpMNrVlw3UmrIaCgzMfG6U",
  "https://drive.google.com/file/d/1ec5scUr2BX1JUIzDpVmawpo7BV-_dUcB",
  "https://drive.google.com/file/d/1x91cUaj4LiCP24_UVx8hHBCR-7G-5pUh",
  "https://drive.google.com/file/d/1uaVnOLzfN7PZXj9DOp_yrJp4QznCgH2j",
  "https://drive.google.com/file/d/1KWtpM-HAHkPscgXDbBrGPuu8No09lJIY",
  "https://drive.google.com/file/d/1nW0SYLy4I9LbqzjexZ3tG7ccO6fZQXXI",
  "https://drive.google.com/file/d/1SShBVP7q0WxjI0mDEdH_dfoEFs303Dum",
  "https://drive.google.com/file/d/1I3nNOOHlhAORU4aw9FM9DC7jx2Kj7Gxp",
  "https://drive.google.com/file/d/18KIPZfSdF45A5VsrniCRvS1E9JShJaax",
  "https://drive.google.com/file/d/19hTmlCv5q8G5wIKqJIPSEE5RkiWUGG5H",
  "https://drive.google.com/file/d/1a-tUYIdWrnT5XLEwN06wQDwt7cDPX9D9",
  "https://drive.google.com/file/d/1P1UtUlKtI5Lfo2Cv-PMrrvgGfX6fRkQJ",
  "https://drive.google.com/file/d/1_UAAp1CZJLL6vJHmS8bz4oAuWpjw_B8x",
  "https://drive.google.com/file/d/18R5poWdVPzPKDvsNI544trXGgzjYugnG",
  "https://drive.google.com/file/d/1pjcznC23Tcc2uRuRh5u-aY_VTGjOyUKh",
  "https://drive.google.com/file/d/19yQka2Gsm7UX_p3nYFxPfQ1I_kmhSpZH",
  "https://drive.google.com/file/d/1wz-9WKXXbjM962umfz1i-aPb6ShOwxoC",
  "https://drive.google.com/file/d/1NqJG6wT-BhmCsu3ZAHrLlvHo6dkl0FUD",
  "https://drive.google.com/file/d/1xQ7PnhqGnfAce8lE9UvAUPuWHNQkbv7t",
  "https://drive.google.com/file/d/1im2SbMhkxR3Jh4i8btUhesNyfYuTiyh-",
  "https://drive.google.com/file/d/1ECfSidz2pqE5KfxPZJv_cp6X0Nlzco0l",
  "https://drive.google.com/file/d/1X-2U479KCQJ4tE9DKC4EPZKiYoTzxten",
  "https://drive.google.com/file/d/1X-2U479KCQJ4tE9DKC4EPZKiYoTzxten",
  "https://drive.google.com/file/d/1RTJT2uiUCcm9pK2CQyD3a-zcJppXLCs2",
  "https://drive.google.com/file/d/1F0_Kqg3Uvi3uVUwKdrkvQKFiwDvyu5VJ",
  "https://drive.google.com/file/d/1A5APcAizZO1NaRq2s_zdK3WSpGJ_6JG2",
  "https://drive.google.com/file/d/1S4Fy29ygE8skIPFRhMFvpWCCgJHlta52",
  "https://drive.google.com/file/d/1yUuIHkf9PhDF1TYicJfWKu5v3L4OLsCZ",
  "https://drive.google.com/file/d/1Tke9POhgk4f63_6U-yPIT2ePjvZHgTxb",
  "https://drive.google.com/file/d/1IxYEAgYKQttw6P0WoyUSq6VqThdcRLgt",
  "https://drive.google.com/file/d/1A0aKvabo9kq7-cc31RGEXM1AV1ZohtnA",
  "https://drive.google.com/file/d/1h9pwdKjuicT-tHf3J1UpD_Nr7_OJERhG",
  "https://drive.google.com/file/d/1Fn_fy6h1z5By-MlynGJH8xD0VOaC2iPp",
  "https://drive.google.com/file/d/1CSQ_PpxkRJ-sbAo8z8bXLBHAY23XI1Ly",
  "https://drive.google.com/file/d/121hmmH2l5T5l7FNGThKTUeYTn8tLxBEw",
  "https://drive.google.com/file/d/1Hw4yOBEehSQnyZzpjS970vcO5l_rrKQM",
  "https://drive.google.com/file/d/1U-mhLTo2geywGlrAdNM4vPOk9xyldSv_",
  "https://drive.google.com/file/d/1Yr1JTCb1eauIwu_pvg9s7Pve5VwOJZdb",
  "https://drive.google.com/file/d/1H2uaduhm_Qmr3xgIsyRoG_AyipJsHwYv",
  "https://drive.google.com/file/d/1quld97ufaS2jrpqQczvHbHfyJvaZ1pMY",
  "https://drive.google.com/file/d/1I3990LaG1sBU-0EMQ88Qy0mTVnoGV_6A",
  "https://drive.google.com/file/d/1BNX8L2De_pjqhgkOaQyQmwckRbhtcq8t",
  "https://drive.google.com/file/d/1v5-L5iP27L9QJuhy_XJVxDil6UNk5z1t",
  "https://drive.google.com/file/d/1rJLhQgRXkTz7ssDm-C8TBGVD4_MoUzp1",
  "https://drive.google.com/file/d/1VazHxCOflGVIBxKJgBhUPyWfPHuNCRdH",
  "https://drive.google.com/file/d/1ZJeEYC_1DamNFNgGaiJoJivAgGAoHBfc",
  "https://drive.google.com/file/d/1rk4JGtfHjKxRQesooyTQIlKACNDbyGeT",
  "https://drive.google.com/file/d/1Og8C7Q-N5s7rEZqjQGqnInFuCFQAkWz-",
  "https://drive.google.com/file/d/1dt6sQc_1xUrOq6bKo-o5HGPlfnCv_WT3",
  "https://drive.google.com/file/d/1n9SJzuJLCBW40216t2nQtp73bNAcMiZU",
  "https://drive.google.com/file/d/111FmDresqjbvMANCH_sfZ_jJzb8Qj1qS",
  "https://drive.google.com/file/d/1YmWPCsMLlCOvsWKCbfcafQcgBkbYhfQU",
  "https://drive.google.com/file/d/1TkUerWUUXCkkhZcsVTCuuzvW_L8FIxqi",
  "https://drive.google.com/file/d/1fPIx7pUZJXb0u0P8_NSq5LSOV9HpZLZC",
  "https://drive.google.com/file/d/1mn9W48FfJdVkwBlwypyg5cOvULt5eLv-",
  "https://drive.google.com/file/d/1OmUPTOmQOEqNwRZPU_Za2xUGRKfFV9ut",
  "https://drive.google.com/file/d/1r-raj3gRRPl1GTK0GigXh9kBj74QwRro",
  "https://drive.google.com/file/d/10iTaaPJDULkqutJGOo4RE5sfV3EI2yAw",
  "https://drive.google.com/file/d/15bEAH8wqyeUo59_ClEYJzbL3-tYpafwm",
  "https://drive.google.com/file/d/1oDaYCgpOjN-KGRgQWrBH9KNpvM4Y8w2W",
  "https://drive.google.com/file/d/1KWALdaXsnxDJyGxvwx8DJ2ZLJ4CJ3PPc",
  "https://drive.google.com/file/d/13G1STWq1jwYARCxH5DIoHTS90-lwjUE2",
  "https://drive.google.com/file/d/1VsDn2TDexCgnqVX2hxl5lzTrhCGVPJ-g",
  "https://drive.google.com/file/d/12k8wZwHcWwo80vUfJXTJ3nOwzmRSWOqh",
  "https://drive.google.com/file/d/1HcPGtniyUiA_9ePxF3MLvp5AJ5__aqj5",
  "https://drive.google.com/file/d/1KUf9fzBusRCwjJi4JYtipk6IbHfMw7VE",
  "https://drive.google.com/file/d/1g-EEljR3VMpY9HaWTzxQX4DD9M3bdgKR",
  "https://drive.google.com/file/d/1Yvgl0CUZlHzJQbFwXCbpAsKmGoA7BmbS",
  "https://drive.google.com/file/d/1BOadO2HrFsnaCOjuiF42eOivZiNrFH9F",
  "https://drive.google.com/file/d/1JRfODhkV7b0PyHnxBUtVIBivCJkrpFy_",
  "https://drive.google.com/file/d/1lYTtRgZApyiKd2wpnrmJGJwPjvmeORP5",
  "https://drive.google.com/file/d/1CX7HFaELH5699gA7jd8ODCkRMwWcJFyK",
  "https://drive.google.com/file/d/1RcFKDZL66bodETcoOyZgVPYj2YJa-8kh",
  "https://drive.google.com/file/d/1qOamTXaGy1d5b7WdREx6t0U5ljpEIMc1",
  "https://drive.google.com/file/d/1tNze6sFDmi8oG1Dh1NC9y4Y8QygXAU4j",
  "https://drive.google.com/file/d/1fbFHHMgH6oR1wmDze7dkMnBTSYBeOO-j",
  "https://drive.google.com/file/d/1vNiKufTg7a3pgMYBt1mau5Er7g0ZD972",
  "https://drive.google.com/file/d/1oHsDM-S3J7KAwLngAHwVAL45AReKo6pP",
  "https://drive.google.com/file/d/1PfvsdT39rgjJQmZwnRW_KbjU_-MidGhN",
  "https://drive.google.com/file/d/16xj4eVsKXUdQMfsZpOSdxD0odHiuPsNX",
  "https://drive.google.com/file/d/1zidYehoFCVhNqUhpFfbtOqNekwLqX2c-",
  "https://drive.google.com/file/d/1HfmPcNubdk1BvqV5zwtUSwEQL4T53hzo",
  "https://drive.google.com/file/d/1YdVGc_ZPJbZI4TglCVe2mnFeQDpK_Vpf",
  "https://drive.google.com/file/d/1OMWdYrQAhCxILDASy1T6Ruy1o7awkIWS",
  "https://drive.google.com/file/d/1huuAADsd1Iy8Q0RKY-nVMJ45F-gSh_uZ",
  "https://drive.google.com/file/d/1qSjtWY3ZvDnVOyqJtMeEWPkTmTArAdiW",
  "https://drive.google.com/file/d/1gr4VWu990G6thp8CPZPjtCdyMGBlVwWI",
  "https://drive.google.com/file/d/1fQVKatLmfggY_0wk4sitSvuRtUPuEpXD",
  "https://drive.google.com/file/d/1h4TMx7wrnuqz77fqL85Kd-giujK8SAOz",
  "https://drive.google.com/file/d/1wrUi2zTrClGNcu0YZYMEC6Q8FL-UvgnP",
  "https://drive.google.com/file/d/1K9I4Wok22Ris6ryswkDzrz7OXwxzo6-V"
]

const mp3 = [
  "Links to every mp3 file indexed",
  "https://drive.google.com/file/d/1ouBnMjo_yWNf0ZGLWXrj8L12sNRp8hST",
  "https://drive.google.com/file/d/1e_dXxzuuOqglSItHDIncTt73T6ODP9Cf",
  "https://drive.google.com/file/d/1UrqQT80-NfQWdwOBvFejnc2RpauX8KrL",
  "https://drive.google.com/file/d/1LDO3Tu4QGjA-6jRwCSZnlQO2Vz-DsdHp",
  "https://drive.google.com/file/d/1G44H-UbYjYgSSKda4vLqUOZZc-Xv3zR9",
  "https://drive.google.com/file/d/1wsDLP8lSY8K66XUuCr51_CtOHxAGwDlP",
  "https://drive.google.com/file/d/1MjpaGIoNyG8IXAIZ6z_eKsBqHXNkAAe2",
  "https://drive.google.com/file/d/1-ygIDQmvTgCfdAEw6xcRlYbvvfrnqYq9",
  "https://drive.google.com/file/d/10BEEZMfJGfgyhtqBGGIhsA2yLJQggJaE",
  "https://drive.google.com/file/d/1HZr_Yso7Ij67yKlif8pY20i-gh-How-I",
  "https://drive.google.com/file/d/1PsCR9b5PavaokXLxc7k4SC6CIhdfHmhK",
  "https://drive.google.com/file/d/1pP-WzPUbxR2DmRgJTuSvufOOn5S4Ngsw",
  "https://drive.google.com/file/d/1NosKbrGpALUj2dxrWNqLD1801Mc02kS6",
  "https://drive.google.com/file/d/1tEjIzAkbBPOivCgWcgxYQQ4vaIN_BLS8",
  "https://drive.google.com/file/d/1gZdNO2vfE10GqNM_E__C00ftIm3uT7r-",
  "https://drive.google.com/file/d/1eQ0OxRaC3A7-r0ik-28Ch1VCVfhPHEac",
  "https://drive.google.com/file/d/1CoC6ZQtSkfESP7O-UQExmU6tgdp824uK",
  "https://drive.google.com/file/d/1hUiHQeCF2I05P7CnGQfT4OSPuRpymhNh",
  "https://drive.google.com/file/d/1j_D2K9pwjCnfMrdvoJrxotcemuuDtTlM",
  "https://drive.google.com/file/d/19SfzQC2_I5vonw28PjmNOEACSqvra6T2",
  "https://drive.google.com/file/d/1HJK8hkk4RRng4H-I2dIdMm_QxGGB-jeU",
  "https://drive.google.com/file/d/1C7P2s7crA2I15auVbYYLQ8bHUkA5f0ww",
  "https://drive.google.com/file/d/1R59lbYcv2TcgrM0tEDxgx9Ygsb-xLgc8",
  "https://drive.google.com/file/d/1D3iCjV20Onolcdbo3LYM4GyBY3m5hLwT",
  "https://drive.google.com/file/d/1jNDzkKgMurZCScKlpdBjcu3ZP7na3Noe",
  "https://drive.google.com/file/d/1NMwt_zM9C-RhCiSTLPe_OsEW7Er7Aqcu",
  "https://drive.google.com/file/d/1yCUU19iR1NmKGTCfcja70Cl2Xbci4gMn",
  "https://drive.google.com/file/d/13Nj2rGrqIxTvSrVWP9yu4hMAxLXEKioC",
  "https://drive.google.com/file/d/1u-Eza7C2joH2LTXw1Fmym_-rhbYDh442",
  "https://drive.google.com/file/d/1TMm4Ws8Npm-lfuezNLmjWHCh4aBTrIYd",
  "https://drive.google.com/file/d/1xKRCEC311sh1ppR-MjAffji3gDHIbbIM",
  "https://drive.google.com/file/d/1-_zA637mgodNfZIrtuIL2iaazLuVmfuy",
  "https://drive.google.com/file/d/1q06HYnBTo2ZfGm4scc9Ze-sxv1tVU_2E",
  "https://drive.google.com/file/d/1U-bjNftO5ziK14m7VQAYiD0ddr_g6a7u",
  "https://drive.google.com/file/d/1H9VOm3fxOkcx5LZ0telfdLWfLpJSptKc",
  "https://drive.google.com/file/d/1Jua0TsLeQ9a8LykWhQv37otWMkI-JtWs",
  "https://drive.google.com/file/d/1sDNsurSMrmgaE02PbmAxS26XkLGXjvgq",
  "https://drive.google.com/file/d/1H2pmdZKbjtuw5xaE9bSTJorQrZCroq6q",
  "https://drive.google.com/file/d/1riyxJSwkzqXx_NI27fs6Gz0b1kvrzqVO",
  "https://drive.google.com/file/d/1qJYx3_jIpeYzobzhLmY7wR8FlmoW9TjE",
  "https://drive.google.com/file/d/1NxTpdVS0zZ4BmPlYFGf1L_BsxOwPz02E",
  "https://drive.google.com/file/d/1Y254ipRqGFalEv1L4jqwo-PGt2ZCyqG_",
  "https://drive.google.com/file/d/1DdHyYdtGoZmd9ZSJJhaxU1bgAWUSkpaO",
  "https://drive.google.com/file/d/1o-qZRNlltMaIc54p_yLlL86wybHgW06K",
  "https://drive.google.com/file/d/1sMEZqmKnpEuGBPVouofzrJeQe7jbtd0K",
  "https://drive.google.com/file/d/1bbbvehI2XmvTh47gDmo3jM8R_KRdKFfB",
  "https://drive.google.com/file/d/12dLq-hjFu3tFIIGWxD-eZfeydgslbjkm",
  "https://drive.google.com/file/d/1jE6Ny6HSXjOcZ-X5RQ--fvznMFx4mrZZ",
  "https://drive.google.com/file/d/1yeu8w8rqJVmRO6orBWx5t-1JcyC2a5P3",
  "https://drive.google.com/file/d/11naSCxPSW8_dZ4wldJilxMKAyQBk5e3U",
  "https://drive.google.com/file/d/18HuMsFH52f1miw40Ks37RfY0jUKctPbH",
  "https://drive.google.com/file/d/1nUlvwyH4NclY49EN_h_LOt_z_MnodCzh",
  "https://drive.google.com/file/d/17UX2rFZZ71iFuZPLbMDi_GL1pseX4li9",
  "https://drive.google.com/file/d/1ZUELPVoQepj13HFfNE1xrRiY3a034dmQ",
  "https://drive.google.com/file/d/1tDXO5cCbWEBnFNSW2tcJbMD3VKk8WeHz",
  "https://drive.google.com/file/d/1Q1vtx6Nw0ZXUgPLRBQCVFOdvi3CwiPtt",
  "https://drive.google.com/file/d/1iNPvQGb3abXNn-a03y7GWy5JbF2yWSbg",
  "https://drive.google.com/file/d/1CKAeSvWpHqkkR0T8SKqXplFyU1taWfD0",
  "https://drive.google.com/file/d/1humkdA7dCpOu2TOxygs_d9Y6OfdQ5b18",
  "https://drive.google.com/file/d/1oPA0hC3F_5iDGHBhLyNSh6jTWHL0BWs4",
  "https://drive.google.com/file/d/1pELKYmKtupd3bLDA3zntetieZPvssT15",
  "https://drive.google.com/file/d/1FgKPCeLrDOXVU_-K3RAxjfbQVSP15IZh",
  "https://drive.google.com/file/d/1xQVezm4PlfE5h0WB92r9r4KbtteU-Bpt",
  "https://drive.google.com/file/d/1rGcHNi8wiZTQE6RdUTkHRgi_dfjExNH-",
  "https://drive.google.com/file/d/1ApuqvKqeAtRXgYxFj5T34_uHP8BF1Bb0",
  "https://drive.google.com/file/d/1Cj663hEKbX1htJwrl1X2GxPrLenWe-2c",
  "https://drive.google.com/file/d/1g0nvr8zYOwwP9dS7UgnGrodEbYIlWC7b",
  "https://drive.google.com/file/d/1jbPoseBJ0QeYCaCfXsyQivEus0UmoTMn",
  "https://drive.google.com/file/d/1I7DXcWa_TpIupuIMz_H7GSUec_o4moRT",
  "https://drive.google.com/file/d/1ZkvEYL_UJ2ERApp9yZKdJ7_20G_WpH3Q"
]

const mp4 = [
  "Links to every lyric video indexed",
  "https://youtu.be/MyISEhYGiag",
  "https://youtu.be/m3p9TCA2w-o",
  "https://youtu.be/DZMh0C3UPMI",
  "https://youtu.be/JNyX6CPOYFU",
  "https://youtu.be/PMF38Ls2DL8",
  "https://youtu.be/bZ-543P4irg",
  "https://youtu.be/nrDcdYy2UUg",
  "https://youtu.be/Ng8BA538u4Y",
  "https://youtu.be/MsCyQWsq-Fc",
  "https://youtu.be/H3DtiWpV44U",
  "https://youtu.be/JLkFsCsqH4I",
  "https://youtu.be/lmmWulyArDk",
  "https://youtu.be/XZiWJ0xCBvk",
  "https://youtu.be/yd5qmLoSTXQ",
  "https://youtu.be/lQBB01_lTpo",
  "https://youtu.be/rwym_pdj144",
  "https://youtu.be/8k2yP-dKd30",
  "https://youtu.be/Xo3wnF8qqkE",
  "https://youtu.be/mOdz6-sT3zE",
  "https://youtu.be/MpQuLTdtMbY",
  "https://youtu.be/gudMbbmP6CE",
  "https://youtu.be/ULmsC6tFaM0",
  "https://youtu.be/uZqNqX6AVpE",
  "https://youtu.be/6FnWVxoOJPo",
  "https://youtu.be/8x6uWzYSvt8",
  "https://youtu.be/qF05iN8Av6U",
  "https://youtu.be/ddeS2IEdPzM",
  "https://youtu.be/ZcqP0ZoAoxs",
  "https://youtu.be/pTAAwkC7b7M",
  "https://youtu.be/zBSGRl9ysLk",
  "https://youtu.be/QtLrTJa8feo",
  "https://youtu.be/oGN8MCtkAVU",
  "https://youtu.be/-bT-gDs1CuI",
  "https://youtu.be/G6e7uLL9NvI",
  "https://youtu.be/s_x3o9ta8lk",
  "https://youtu.be/Sg4ej2ZN044",
  "https://youtu.be/3ehmoV4m1R8",
  "https://youtu.be/erwFeOcUx4k",
  "https://youtu.be/uxmqkMF0xfU",
  "https://youtu.be/ioFVEWSEbd4",
  "https://youtu.be/WjVN9CTQ8PE",
  "https://youtu.be/8M4SvqFIXAs",
  "https://youtu.be/2m5wkm9KStM",
  "https://youtu.be/eMc48crtf2U",
  "https://youtu.be/kZKdQvswES8",
  "https://youtu.be/j04akf-DJK4",
  "https://youtu.be/ILCMfq6V0B4",
  "https://youtu.be/5_IyOzN_YNc",
  "https://youtu.be/kEkLfMSC37c",
  "https://youtu.be/OIt9ilIlQG0",
  "https://youtu.be/CYdRXUjyl5c",
  "https://youtu.be/_FJvN-qQQbc",
  "https://youtu.be/f6udDmXNalk",
  "https://youtu.be/bXpzbc2s1l0",
  "https://youtu.be/KxA3bGHE78E",
  "https://youtu.be/3kw9IMkXzH4",
  "https://youtu.be/1eJp0Fdk_3A",
  "https://youtu.be/QY-iAVYULeM",
  "https://youtu.be/ob2hq856DjQ",
  "https://youtu.be/bEq_klGoXns",
  "https://youtu.be/CsGq2gDz-ZY",
  "https://youtu.be/CbknXq1ROFY",
  "https://youtu.be/tf25BStMz2c",
  "https://youtu.be/Q-wntxrQWvM",
  "https://youtu.be/BbX_3_TJw8c",
  "https://youtu.be/JT305os09WQ",
  "https://youtu.be/2C9bVI4JQSI",
  "https://youtu.be/OZRud-GCxRI",
  "https://youtu.be/BFadpJkjsgU",
  "https://youtu.be/rYYrhRA63jo"
]


export const catechismItems: Record<number, CatechismItem> = {
  "1": {
    "number": 1,
    "section": 1,
    "question": "Who is the first and chiefest being?",
    "answer": [
      {
        "text": "God is the first and chiefest being.",
        "references": [
          {
            "citation": "Isaiah 44:6",
            "text": `<num data-verse="6"></num>Thus says the LORD,
  the King and Redeemer of Israel, the LORD of Hosts:
“I am the first and I am the last,
  and there is no God but Me.`
          },
          {
            "citation": "Isaiah 48:12",
            "text": `<num data-verse="12"></num>Listen to Me, O Jacob,
  and Israel, whom I have called:
I am He; I am the first,
  and I am the last.`
          },
          {
            "citation": "Psalm 97:9",
            "text": `<num data-verse="9"></num>For You, O LORD, are Most High over all the earth;
  You are exalted far above all gods.`
          }
        ]
      }
    ],
    "topics": [
      "God",
      "Sovereignty"
    ],
    "originalQuestion": "Who is the first and chiefest being?",
    "originalAnswer": "God is the first and chiefest being.",
    "video": mp4[1],
    "song": mp3[1],
    "color": coloring[1],
    "confession": [
      "\"The Lord our God is but one only living and true God; whose subsistence is in and of Himself... being of infinite being and perfection...\" - 2.1"
    ],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "2": {
    "number": 2,
    "section": 1,
    "question": "Should everyone believe there is a God?",
    "answer": [
      {
        "text": "Everyone ought to believe there is a God;",
        "references": [
          {
            "citation": "Hebrews 11:6",
            "text": `<num data-verse="6"></num>And without faith it is impossible to please God. For anyone who approaches Him must believe that He exists and that He rewards those who earnestly seek Him.`
          }
        ]
      },
      {
        "text": "it is their great sin and folly who do not believe.",
        "references": [
          {
            "citation": "Psalm 14:1",
            "text": `<num data-verse="1"></num>The fool says in his heart,
  “There is no God.”

They are corrupt; their acts are vile.
  There is no one who does good.`
          }
        ]
      }
    ],
    "topics": [
      "God",
      "Belief",
      "Folly"
    ],
    "originalQuestion": "Ought everyone to believe there is a God?",
    "originalAnswer": "Everyone ought to believe there is a God; and it is their great sin and folly who do not.",
    "video": mp4[1],
    "song": mp3[1],
    "color": coloring[2],
    "confession": [
      "\"The light of nature and the works of creation and providence do so far manifest the goodness, wisdom, and power of God, as to leave men inexcusable.\" - 1.1",
      "\"The Lord our God... is most holy, wise, powerful...\" - 2.1"
    ],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "3": {
    "number": 3,
    "section": 1,
    "question": "How may we know there is a God?",
    "answer": [
      {
        "text": "Human reason and the works of God plainly declare that there is a God,",
        "references": [
          {
            "citation": "Romans 1:19-20",
            "text": `<num data-verse="19"></num>For what may be known about God is plain to them, because God has made it plain to them. <num data-verse="20"></num>For since the creation of the world God's invisible qualities, His eternal power and divine nature, have been clearly seen, being understood from His workmanship, so that men are without excuse.`
          },
          {
            "citation": "Psalm 19:1-3",
            "text":
            `<num data-verse="1"></num>The heavens declare the glory of God;
  the skies proclaim the work of His hands.
  <num data-verse="2"></num>Day after day they pour forth speech;
  night after night they reveal knowledge.
<num data-verse="3"></num>Without speech or language,
  without a sound to be heard,`
          },
          {
            "citation": "Acts 17:24",
            "text": `<num data-verse="24"></num>The God who made the world and everything in it is the Lord of heaven and earth and does not live in temples made by human hands.`
          }
        ]
      },
      {
        "text": "but only God's Word and Holy Spirit do so fully and effectually for the salvation of sinners.",
        "references": [
          {
            "citation": "1 Corinthians 2:10",
            "text": `<num data-verse="10"></num>But God has revealed it to us by the Spirit.

The Spirit searches all things, even the deep things of God.`
          },
          {
            "citation": "2 Timothy 3:15-16",
            "text": `<num data-verse="15"></num>From infancy you have known the Holy Scriptures, which are able to make you wise for salvation through faith in Christ Jesus. <num data-verse="16"></num>All Scripture is God-breathed and is useful for instruction, for conviction, for correction, and for training in righteousness,`
          }
        ]
      }
    ],
    "topics": [
      "God",
      "Belief",
      "Reason",
      "Revelation",
      "Creation",
      "Bible",
      "Holy Spirit"
    ],
    "originalQuestion": "How may we know there is a God?",
    "originalAnswer": "The light of nature in man and the works of God plainly declare there is a God; but his word and Spirit only do it fully and effectually for the salvation of sinners.",
    "video": mp4[1],
    "song": mp3[1],
    "color": coloring[3],
    "confession": [
      "\"…manifest the goodness, wisdom, and power of God, as to leave men inexcusable...\" - 1.1",
      "\"...the Holy Scripture is the only sufficient, certain, and infallible rule of all saving knowledge...\" - 1.6"
    ],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "4": {
    "number": 4,
    "section": 1,
    "question": "What is the Word of God?",
    "answer": [
      {
        "text": "The Holy Scriptures of the Old and New Testaments are the Word of God and the only certain rule of faith and obedience.",
        "references": [
          {
            "citation": "2 Timothy 3:16",
            "text": `<num data-verse="16"></num>All Scripture is God-breathed and is useful for instruction, for conviction, for correction, and for training in righteousness, `
          },
          {
            "citation": "Ephesians 2:20",
            "text": `<num data-verse="20"></num>built on the foundation of the apostles and prophets, with Christ Jesus Himself as the cornerstone.`
          }
        ]
      }
    ],
    "topics": [
      "Bible",
      "Faith",
      "Obedience"
    ],
    "originalQuestion": "What is the word of God?",
    "originalAnswer": "The holy scriptures of the Old and New Testament are the word of God, and the only certain rule of faith and obedience.",
    "video": mp4[2],
    "song": mp3[2],
    "color": coloring[4],
    "confession": [
      "\"...the Holy Scripture... are now contained under the name of the Holy Scriptures or the written Word of God, the books of the Old and New Testaments...\" - 1.1"
    ],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "5": {
    "number": 5,
    "section": 1,
    "question": "Are all permitted to use the Holy Scriptures?",
    "answer": [
      {
        "text": "All are not only permitted but commanded and encouraged to read, hear, and understand the Holy Scriptures.",
        "references": [
          {
            "citation": "John 5:38",
            "text": `<num data-verse="38">nor does His word abide in you, because you do not believe the One He sent.</num>`
          },
          {
            "citation": "John 17:17-18",
            "text": `<num data-verse="17"></num>Sanctify them by the truth; Your word is truth. <num data-verse="18"></num>As You sent Me into the world, I have also sent them into the world.`
          },
          {
            "citation": "Revelation 1:3",
            "text": `<num data-verse="3"></num>Blessed is the one who reads aloud the words of this prophecy, and blessed are those who hear and obey what is written in it, because the time is near.`
          },
          {
            "citation": "Acts 8:30",
            "text": `<num data-verse="30"></num>So Philip ran up and heard the man reading Isaiah the prophet. \"Do you understand what you are reading?\" Philip asked.`
          }
        ]
      }
    ],
    "topics": [
      "Bible",
      "Knowledge"
    ],
    "originalQuestion": "May all men make use of the holy scriptures?",
    "originalAnswer": "All men are not only permitted, but commanded and exhorted to read, hear, and understand the holy scriptures.",
    "video": mp4[2],
    "song": mp3[2],
    "color": coloring[5],
    "confession": [
      "\"...being immediately inspired by God... to be read by all.\" - 1.8",
      "\"The supreme judge... can be no other but the Holy Scripture...\" - 1.10"
    ],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "6": {
    "number": 6,
    "section": 1,
    "question": "What are the primary contents of the Holy Scriptures?",
    "answer": [
      {
        "text": "The primary contents of the Holy Scriptures are what man ought to believe concerning God and what duty God requires of man.",
        "references": [
          {
            "citation": "2 Timothy 1:13",
            "text": `<num data-verse="13"></num>Hold on to the pattern of sound teaching you have heard from me, with the faith and love that are in Christ Jesus.`
          },
          {
            "citation": "2 Timothy 3:15-16",
            "text": `<num data-verse="15"></num>From infancy you have known the Holy Scriptures, which are able to make you wise for salvation through faith in Christ Jesus.<num data-verse="16"></num>All Scripture is God-breathed and is useful for instruction, for conviction, for correction, and for training in righteousness, `
          }
        ]
      }
    ],
    "topics": [
      "Bible",
      "Knowledge",
      "God",
      "Obedience"
    ],
    "originalQuestion": "What things are chiefly contained in the holy scriptures?",
    "originalAnswer": "The holy scriptures chiefly contain what man ought to believe concerning God, and what duty God requireth of man.",
    "video": mp4[2],
    "song": mp3[2],
    "color": coloring[6],
    "confession": [
      "\"…to give the knowledge of God, and of His will unto salvation.\" - 1.1",
      "\"…concerning all things necessary for His own glory, man's salvation, faith and life...\" - 1.6"
    ],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "7": {
    "number": 7,
    "section": 1,
    "question": "What is God?",
    "answer": [
      {
        "text": "God is a Spirit;",
        "references": [
          {
            "citation": "John 4:24",
            "text": `<num data-verse="24"></num>God is Spirit, and His worshipers must worship Him in spirit and in truth.`
          }
        ]
      },
      {
        "text": "infinite;",
        "references": [
          {
            "citation": "Job 11:7-9",
            "text": `<num data-verse="7"></num>Can you fathom the deep things of God
  or discover the limits of the Almighty?
<num data-verse="8"></num>They are higher than the heavens—what can you do?
  They are deeper than Sheol—what can you know?
<num data-verse="9"></num>Their measure is longer than the earth
  and wider than the sea.`
          }
        ]
      },
      {
        "text": "eternal;",
        "references": [
          {
            "citation": "Psalm 90:2",
            "text": `<num data-verse="2"></num>Before the mountains were born
  or You brought forth the earth and the world,
from everlasting to everlasting
  You are God.`
          }
        ]
      },
      {
        "text": "and unchangeable",
        "references": [
          {
            "citation": "James 1:17",
            "text": `<num data-verse="17"></num>Every good and perfect gift is from above, coming down from the Father of the heavenly lights, with whom there is no change or shifting shadow.`
          }
        ]
      },
      {
        "text": "in His being,",
        "references": [
          {
            "citation": "Exodus 3:14",
            "text": `<num data-verse="14"></num>God said to Moses, “I AM WHO I AM. This is what you are to say to the Israelites: 'I AM has sent me to you.'"`
          }
        ]
      },
      {
        "text": "wisdom,",
        "references": [
          {
            "citation": "Psalm 147:5",
            "text": `<num data-verse="5"></num>Great is our Lord, and mighty in power;
  His understanding has no limit.`
          }
        ]
      },
      {
        "text": "power,",
        "references": [
          {
            "citation": "Revelation 4:8",
            "text": `<num data-verse="8"></num>And each of the four living creatures had six wings and was covered with eyes all around and within. Day and night they never stop saying:

"Holy, Holy, Holy,
  is the Lord God Almighty,
  who was and is and is to come!"`
          }
        ]
      },
      {
        "text": "holiness,",
        "references": [
          {
            "citation": "Revelation 15:4",
            "text": `<num data-verse="4"></num>Who will not fear You, O Lord,
  and glorify Your name?
  For You alone are holy.
All nations will come and worship before You,
  for Your righteous acts have been revealed."`
          }
        ]
      },
      {
        "text": "justice, goodness, and truth.",
        "references": [
          {
            "citation": "Exodus 34:6",
            "text": `<num data-verse="6"></num>Then the LORD passed in front of Moses and called out:

  "The LORD, the LORD God,
    is compassionate and gracious,
  slow to anger,
    abounding in loving devotion and faithfulness,`
          }
        ]
      }
    ],
    "topics": [
      "God",
      "Holiness"
    ],
    "originalQuestion": "What is God?",
    "originalAnswer": "God is a Spirit, infinite, eternal, and unchangeable in his being, wisdom, power, holiness, justice, goodness, and truth.",
    "video": mp4[3],
    "song": mp3[3],
    "color": coloring[7],
    "confession": [
      "\"…infinite in being and perfection; whose essence cannot be comprehended by any but Himself...\" - 2.1"
    ],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "8": {
    "number": 8,
    "section": 1,
    "question": "Is there more than one god?",
    "answer": [
      {
        "text": "There is only one: the living and true God.",
        "references": [
          {
            "citation": "Deuteronomy 6:4",
            "text": `<num data-verse="4"></num>Hear, O Israel: The LORD our God, the LORD is One.`
          },
          {
            "citation": "Jeremiah 10:10",
            "text": `<num data-verse="10"></num>But the LORD is the true God;
  He is the living God and eternal King.
The earth quakes at His wrath,
  and the nations cannot endure His indignation.`
          }
        ]
      }
    ],
    "topics": [
      "God",
      "Sovereignty",
      "Holiness"
    ],
    "originalQuestion": "Are there more gods than one?",
    "originalAnswer": "There is but one only, the living and true God.",
    "video": mp4[3],
    "song": mp3[3],
    "color": coloring[8],
    "confession": [
      "\"The Lord our God is but one only living and true God...\" - 2.1"
    ],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "9": {
    "number": 9,
    "section": 1,
    "question": "How many persons are in the Godhead?",
    "answer": [
      {
        "text": "There are three Persons in the Godhead: the Father, the Son, and the Holy Spirit. These three are one God—the same in essence, equal in power and glory.",
        "references": [
          {
            "citation": "1 John 5:7",
            "text": `<num data-verse="7"></num>For there are three that testify:`
          },
          {
            "citation": "Matthew 28:19",
            "text": `<num data-verse="19"></num>Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit,`
          }
        ]
      }
    ],
    "topics": [
      "Trinity",
      "God"
    ],
    "originalQuestion": "How many persons are there in the Godhead?",
    "originalAnswer": "There are three persons in the godhead, the Father, the Son, and the Holy Spirit; and these three are one God, the same in essence, equal in power and glory.",
    "video": mp4[3],
    "song": mp3[3],
    "color": coloring[9],
    "confession": [
      "\"In this divine and infinite Being there are three subsistences... the Father, the Word or Son, and the Holy Spirit... equal in power and glory...\" - 2.3"
    ],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "10": {
    "number": 10,
    "section": 1,
    "question": "What are the decrees of God?",
    "answer": [
      {
        "text": "The decrees of God are His eternal purpose according to the counsel of His will by which, for His own glory, He has foreordained whatsoever comes to pass.",
        "references": [
          {
            "citation": "Ephesians 1:4",
            "text": `<num data-verse="4"></num>For He chose us in Him before the foundation of the world to be holy and blameless in His presence.`
          },
          {
            "citation": "Ephesians 1:11",
            "text": `<num data-verse="11"></num>In Him we were also chosen as God's own, having been predestined according to the plan of Him who works out everything by the counsel of His will, `
          },
          {
            "citation": "Romans 9:22-23",
            "text": `<num data-verse="22"></num>What if God, intending to show His wrath and make His power known, bore with great patience the vessels of His wrath, prepared for destruction? <num data-verse="23"></num>What if He did this to make the riches of His glory known to the vessels of His mercy, whom He prepared in advance for glory—`
          },
          {
            "citation": "Isaiah 46:10",
            "text": `<num data-verse="10"></num>I declare the end from the beginning,
  and from ancient times what is still to come.
I say, 'My purpose will stand,
  and all My good pleasure I will accomplish.'`
          },
          {
            "citation": "Lamentations 3:37",
            "text": `<num data-verse="37"></num>Who has spoken and it came to pass,
  unless the Lord has ordained it?`
          }
        ]
      }
    ],
    "topics": [
      "God",
      "Sovereignty"
    ],
    "originalQuestion": "What are the decrees of God?",
    "originalAnswer": "The decrees of God are his eternal purpose according to the counsel of his will, whereby, for his own glory, he hath foreordained whatsoever comes to pass.",
    "video": mp4[4],
    "song": mp3[4],
    "color": coloring[10],
    "confession": [
      "\"God hath decreed in Himself... whatsoever comes to pass... for His own glory...\" - 3.1"
    ],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "11": {
    "number": 11,
    "section": 1,
    "question": "How does God carry out His decrees?",
    "answer": [
      {
        "text": "God carries out His decrees in the works of creation and providence.",
        "references": [
          {
            "citation": "Isaiah 45:10",
            "text": `<num data-verse="10"></num>Woe to him who says to his father,
  'What have you begotten?'
or to his mother,
  'What have you brought forth?'”`
          },
          {
            "citation": "Revelation 4:11",
            "text": `<num data-verse="11"></num>"Worthy are You, our Lord and God,
  to receive glory and honor and power,
for You created all things;
  by Your will they exist and were created."`
          },
          {
            "citation": "Daniel 4:35",
            "text": `<num data-verse="35"></num>All the peoples of the earth
  are counted as nothing,
and He does as He pleases
  with the army of heaven
  and the peoples of the earth.
There is no one who can restrain His hand
  or say to Him, 'What have You done?'"`
          }
        ]
      }
    ],
    "topics": [
      "God",
      "Sovereignty",
      "Providence"
    ],
    "originalQuestion": "How doth God execute his decrees?",
    "originalAnswer": "God executeth his decrees in the works of creation and providence.",
    "video": mp4[4],
    "song": mp3[4],
    "color": coloring[11],
    "confession": [
      `"In the beginning it pleased God... to create... the world, and all things therein." - 4.1`,
      `"God the good Creator... doth uphold, direct, dispose, and govern all creatures..." - 5.1`
    ],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "12": {
    "number": 12,
    "section": 1,
    "question": "What is the work of creation?",
    "answer": [
      {
        "text": "The work of creation is God's making all things of nothing, by the word of His power, in the span of six days—and all was very good.",
        "references": [
          {
            "citation": "Genesis 1:1-2",
            "text": `<num data-verse="1"></num>In the beginning God created the heavens and the earth.

<num data-verse="2"></num>Now the earth was formless and void, and darkness was over the surface of the deep. And the Spirit of God was hovering over the surface of the waters.`
          },
          {
            "citation": "Hebrews 11:3",
            "text": `<num data-verse="3"></num>By faith we understand that the universe was formed at God's command, so that what is seen was not made out of what was visible.`
          }
        ]
      }
    ],
    "topics": [
      "Creation",
      "God"
    ],
    "originalQuestion": "What is the work of creation?",
    "originalAnswer": "The work of creation is God's making all things of nothing, by the word of his power, in the space of six days, and all very good.",
    "video": mp4[5],
    "song": mp3[5],
    "color": coloring[12],
    "confession": [
      `"...to create or make the world, and all things therein, whether visible or invisible, in the space of six days, and all very good." - 4.1`
    ],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "13": {
    "number": 13,
    "section": 1,
    "question": "How did God create man?",
    "answer": [
      {
        "text": "God created man: male and female; in His image; in knowledge, righteousness, and holiness; with dominion over creatures.",
        "references": [
          {
            "citation": "Genesis 1:26-28",
            "text": `<num data-verse="26">Then God said, "Let Us make man in Our image, after Our likeness, to rule over the fish of the sea and the birds of the air, over the livestock, and over all the earth itselfd and every creature that crawls upon it." </num><num data-verse="27">So God created man in His own image;
  in the image of God He created him;
  male and female He created them.
  </num><num data-verse="28"></num>God blessed them and said to them, "Be fruitful and multiply, and fill the earth and subdue it; rule over the fish of the sea and the birds of the air and every creature that crawls upon the earth."`
          },
          {
            "citation": "Colossians 3:10",
            "text": `<num data-verse="10"></num>and have put on the new self, which is being renewed in knowledge in the image of its Creator.`
          },
          {
            "citation": "Ephesians 4:24",
            "text": `<num data-verse="24"></num>and to put on the new self, created to be like God in true righteousness and holiness.`
          }
        ]
      }
    ],
    "topics": [
      "Humanity",
      "God"
    ],
    "originalQuestion": "How did God create man?",
    "originalAnswer": "God created man, male and female, after his own image, in knowledge, righteousness, and holiness, with dominion over the creatures.",
    "video": mp4[5],
    "song": mp3[5],
    "color": coloring[13],
    "confession": [
      `"After God had made all other creatures, He created man... with reasonable and immortal souls... after His own image, in knowledge, righteousness, and true holiness..." - 4.2`
    ],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "14": {
    "number": 14,
    "section": 0,
    "question": "What are God's works of providence?",
    "answer": [
      {
        "text": "God's works of providence are His most holy,",
        "references": [
          {
            "citation": "Psalm 145:17",
            "text": `<num data-verse="17"></num>The LORD is righteous in all His ways
  and kind in all His deeds.`
          }
        ]
      },
      {
        "text": " wise,",
        "references": [
          {
            "citation": "Isaiah 28:29",
            "text": `<num data-verse="29"></num>This also comes from the LORD of Hosts,
  who is wonderful in counsel
  and excellent in wisdom.`
          },
          {
            "citation": "Psalm 104:24",
            "text": `<num data-verse="24"></num>How many are Your works, O LORD!
  In wisdom You have made them all;
  the earth is full of Your creatures.`
          }
        ]
      },
      {
        "text": " and powerful preserving",
        "references": [
          {
            "citation": "Hebrews 1:3",
            "text": `<num data-verse="3"></num>The Son is the radiance of God's glory and the exact representation of His nature, upholding all things by His powerful word. After He had provided purification for sins, He sat down at the right hand of the Majesty on high.`
          }
        ]
      },
      {
        "text": " and governing of all His creatures and all their actions.",
        "references": [
          {
            "citation": "Psalm 103:19",
            "text": `<num data-verse="19"></num>The LORD has established His throne in heaven,
  and His kingdom rules over all.`
          },
          {
            "citation": "Matthew 10:29-31",
            "text": `<num data-verse="29"></num>Are not two sparrows sold for a penny? Yet not one of them will fall to the ground apart from the will of your Father. <num data-verse="30"></num>And even the very hairs of your head are all numbered. <num data-verse="31"></num>So do not be afraid; you are worth more than many sparrows.`
          }
        ]
      }
    ],
    "topics": [
      "Providence",
      "God"
    ],
    "originalQuestion": "What are God's works of providence?",
    "originalAnswer": "God's works of providence are his most holy, wise, and powerful preserving and governing all his creatures, and all their actions.",
    "video": mp4[6],
    "song": mp3[6],
    "color": coloring[14],
    "confession": [
      `"...doth uphold, direct, dispose, and govern all creatures and things, from the greatest even to the least..." - 5.1`
    ],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "15": {
    "number": 15,
    "section": 1,
    "question": "What special act of providence did God exercise toward man in the state in which he was created?",
    "answer": [
      {
        "text": "When God had created man, he entered into a covenant of life with him upon condition of perfect obedience, forbidding him to eat of the tree of the knowledge of good and evil upon pain of death.",
        "references": [
          {
            "citation": "Galatians 3:12",
            "text": `<num data-verse="12"></num>The law, however, is not based on faith; on the contrary, “The man who does these things will live by them.”`
          },
          {
            "citation": "Genesis 2:17",
            "text": `<num data-verse="17"></num>"... but you must not eat from the tree of the knowledge of good and evil; for in the day that you eat of it, you will surely die."`
          }
        ]
      }
    ],
    "topics": [
      "Providence",
      "God",
      "Humanity"
    ],
    "originalQuestion": "What special act of providence did God exercise towards man in the estate wherein he was created?",
    "originalAnswer": "When God had created man, he entered into a covenant of life with him upon condition of perfect obedience; forbidding him to eat of the tree of the knowledge of good and evil, upon pain of death.",
    "video": mp4[6],
    "song": mp3[6],
    "color": coloring[15],
    "confession": [
      `"...God gave a law... promising life upon the fulfilling..." - 6.1`,
      `"The distance between God and the creature is so great... it pleased the Lord to make a covenant..." - 7.1`
    ],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "16": {
    "number": 16,
    "section": 1,
    "question": "Did our first parents continue in the state in which they were created?",
    "answer": [
      {
        "text": "Our first parents, being left to the freedom of their own will, fell from the state in which they were created by sinning against God.",
        "references": [
          {
            "citation": "Genesis 3:6-8",
            "text": `<num data-verse="6"></num>When the woman saw that the tree was good for food and pleasing to the eyes, and that it was desirable for obtaining wisdom, she took the fruit and ate it. She also gave some to her husband who was with her, and he ate it.
            <num data-verse="7"></num>And the eyes of both of them were opened, and they knew that they were naked; so they sewed together fig leaves and made coverings for themselves.
            <num data-verse="8"></num>Then the man and his wife heard the voice of the LORD God walking in the garden in the breeze of the day, and they hid themselves from the presence of the LORD God among the trees of the garden.`
          },
          {
            "citation": "Genesis 3:13",
            "text": `<num data-verse="13"></num>Then the LORD God said to the woman, “What is this you have done?”`
          },
          {
            "citation": "Ecclesiastes 7:29",
            "text": `<num data-verse="29"></num>"... Only this have I found: I have discovered that God made mankind upright, but they have sought out many schemes."`
          }
        ]
      }
    ],
    "topics": [
      "Humanity",
      "Sin",
      "Fall, The"
    ],
    "originalQuestion": "Did our first parents continue in the estate wherein they were created?",
    "originalAnswer": "Our first parents being left to the freedom of their own will, fell from the estate wherein they were created, by sinning against God.",
    "video": mp4[7],
    "song": mp3[7],
    "color": coloring[16],
    "confession": [
      `"Our first parents... sinned, in eating the forbidden fruit; by which they fell from their original righteousness and communion with God..." - 6.1`
    ],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "17": {
    "number": 17,
    "section": 2,
    "question": "What is sin?",
    "answer": [
      {
        "text": "Sin is any lack of conformity to, or any transgression of, the law of God.",
        "references": [
          {
            "citation": "1 John 3:4",
            "text": `<num data-verse="4"></num>Everyone who practices sin practices lawlessness as well. Indeed, sin is lawlessness.`
          }
        ]
      }
    ],
    "topics": [
      "Sin",
      "Law, The",
      "Obedience"
    ],
    "originalQuestion": "What is sin?",
    "originalAnswer": "Sin is any want of conformity unto, or transgression of, the law of God.",
    "video": mp4[7],
    "song": mp3[7],
    "color": coloring[17],
    "confession": [
      `“...whereby sin came into the world... and all became sinners...” - 6.2`,
      `“...sin is any transgression of the law...” - 15.3`
    ],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "18": {
    "number": 18,
    "section": 2,
    "question": "What was the sin by which our first parents fell from the state in which they were created?",
    "answer": [
      {
        "text": "The sin by which our first parents fell from the state in which they were created was their eating of the forbidden fruit.",
        "references": [
          {
            "citation": "Genesis 3:6",
            "text": `<num data-verse="6"></num>When the woman saw that the tree was good for food and pleasing to the eyes, and that it was desirable for obtaining wisdom, she took the fruit and ate it. She also gave some to her husband who was with her, and he ate it.`
          },
          {
            "citation": "Genesis 3:12",
            "text": `<num data-verse="12"></num>And the man answered, “The woman whom You gave me, she gave me fruit from the tree, and I ate it.”`
          },
          {
            "citation": "Genesis 3:16-17",
            "text": `<num data-verse="16"></num>To the woman He said:

  “I will sharply increase your pain in childbirth;
    in pain you will bring forth children.
  Your desire will be for your husband,
    and he will rule over you.”
    
<num data-verse="17"></num>And to Adam He said:

  “Because you have listened to the voice of your wife
    and have eaten from the tree
    of which I commanded you not to eat,
  cursed is the ground because of you;
    through toil you will eat of it
    all the days of your life.`
          }
        ]
      }
    ],
    "topics": [
      "Sin",
      "Fall, The"
    ],
    "originalQuestion": "What was the sin whereby our first parents fell from the estate wherein they were created?",
    "originalAnswer": "The sin whereby our first parents fell from the estate wherein they were created, was their eating the forbidden fruit.",
    "video": mp4[7],
    "song": mp3[7],
    "color": coloring[18],
    "confession": [
      `“...sinned in eating the forbidden fruit...” - 6.1`
    ],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "19": {
    "number": 19,
    "section": 2,
    "question": "Did all mankind fall in Adam's first transgression?",
    "answer": [
      {
        "text": "Since the covenant was made with Adam not only for himself but for his descendants, all mankind descending from him by ordinary means sinned in him and fell with him in his first transgression.",
        "references": [
          {
            "citation": "Genesis 2:16-17",
            "text": `<num data-verse="16"></num>And the LORD God commanded him: “You may eat freely from every tree of the garden, <num data-verse="17"></num>but you must not eat from the tree of the knowledge of good and evil;
  for in the day that you eat of it, you will surely die.”`
          },
          {
            "citation": "Romans 5:12",
            "text": `<num data-verse="12"></num>Therefore, just as sin entered the world through one man, and death through sin, so also death was passed on to all men, because all sinned.`
          },
          {
            "citation": "1 Corinthians 15:21-22",
            "text": `<num data-verse="21"></num>For since death came through a man, the resurrection of the dead comes also through a man. <num data-verse="22"></num>For as in Adam all die, so in Christ all will be made alive.`
          }
        ]
      }
    ],
    "topics": [
      "Sin",
      "Humanity",
      "Fall, The"
    ],
    "originalQuestion": "Did all mankind fall in Adam's first transgression?",
    "originalAnswer": "The covenant being made with Adam, not only for himself but for his posterity, all mankind descending from him by ordinary generation sinned in him, and fell with him in his first transgression.",
    "video": mp4[8],
    "song": mp3[8],
    "color": coloring[19],
    "confession": [
      `“By this sin... all mankind... sinned in him and fell with him in that first transgression.” - 6.2`,
      `“...the guilt of this sin was imputed...” - 6.3`
    ],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "20": {
    "number": 20,
    "section": 2,
    "question": "Into what state did the fall bring mankind?",
    "answer": [
      {
        "text": "The fall brought mankind into a state of sin and misery.",
        "references": [
          {
            "citation": "Romans 5:12",
            "text": `<num data-verse="12"></num>Therefore, just as sin entered the world through one man, and death through sin, so also death was passed on to all men, because all sinned.`
          }
        ]
      }
    ],
    "topics": [
      "Fall, The",
      "Sin",
      "Humanity",
      "Curse, The"
    ],
    "originalQuestion": "Into what estate did the fall bring mankind?",
    "originalAnswer": "The fall brought mankind into an estate of sin and misery.",
    "video": mp4[8],
    "song": mp3[8],
    "color": coloring[20],
    "confession": [
      `“...became dead in sin... wholly defiled in all faculties of soul and body...” - 6.2`
    ],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "21": {
    "number": 21,
    "section": 2,
    "question": "Of what does the sinfulness of the state into which man fell consist?",
    "answer": [
      {
        "text": "The sinfulness of the state into which man fell consists of the guilt of Adam's first sin, the lack of original righteousness, and the corruption of his whole nature\u2014commonly called original sin\u2014together with all actual transgressions that proceed from it.",
        "references": [
          {
            "citation": "Romans 5:12",
            "text": `<num data-verse="12"></num>Therefore, just as sin entered the world through one man, and death through sin, so also death was passed on to all men, because all sinned.`
          },
          {
            "citation": "Ephesians 2:1-3",
            "text": `<num data-verse="1"></num>And you were dead in your trespasses and sins, <num data-verse="2"></num>in which you used to walk when you conformed to the ways of this world and of the ruler of the power of the air—the spirit who is now at work in the sons of disobedience. <num data-verse="3"></num>All of us also lived among them at one time, fulfilling the cravings of our flesh and indulging its desires and thoughts. Like the rest, we were by nature children of wrath.`
          },
          {
            "citation": "James 1:14-15",
            "text": `<num data-verse="14"></num>But each one is tempted when by his own evil desires he is lured away and enticed. <num data-verse="15"></num>Then after desire has conceived, it gives birth to sin; and sin, when it is full-grown, gives birth to death.`
          },
          {
            "citation": "Matthew 15:19",
            "text": `<num data-verse="19"></num>For out of the heart come evil thoughts, murder, adultery, sexual immorality, theft, false testimony, and slander.`
          }
        ]
      }
    ],
    "topics": [
      "Fall, The",
      "Sin"
    ],
    "originalQuestion": "Wherein consists the sinfulness of that estate whereinto man fell?",
    "originalAnswer": "The sinfulness of that estate whereinto man fell, consists in the guilt of Adam's first sin, the want of original righteousness, and the corruption of his whole nature, which is commonly called original sin; together with all actual transgressions which proceed from it.",
    "video": mp4[9],
    "song": mp3[9],
    "color": coloring[21],
    "confession": [
      `“...whereby all men... became dead in sin, and wholly defiled...” - 6.2`,
      `“...the guilt of this sin was imputed; and corrupted nature conveyed...” - 6.3`,
      `“...from this original corruption... proceed all actual transgressions.” - 6.4`
    ],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "22": {
    "number": 22,
    "section": 2,
    "question": "What is the misery of the state into which man fell?",
    "answer": [
      {
        "text": "All mankind by their fall: lost communion with God;",
        "references": [
          {
            "citation": "Genesis 3:8",
            "text": `<num data-verse="8"></num>Then the man and his wife heard the voice of the LORD God walking in the garden in the breeze of the day, and they hid themselves from the presence of the LORD God among the trees of the garden.`
          },
          {
            "citation": "Genesis 3:10",
            "text": `<num data-verse="10"></num>“I heard Your voice in the garden,” he replied, “and I was afraid because I was naked; so I hid myself.”`
          },
          {
            "citation": "Genesis 3:24",
            "text": `<num data-verse="24"></num>So He drove out the man and stationed cherubim on the east side of the Garden of Eden, along with a whirling sword of flame to guard the way to the tree of life.`
          }
        ]
      },
      {
        "text": " are under His wrath and curse;",
        "references": [
          {
            "citation": "Ephesians 2:2-3",
            "text": `<num data-verse="2"></num>in which you used to walk when you conformed to the ways of this world and of the ruler of the power of the air, the spirit who is now at work in the sons of disobedience. <num data-verse="3"></num>All of us also lived among them at one time, fulfilling the cravings of our flesh and indulging its desires and thoughts. Like the rest, we were by nature children of wrath.`
          },
          {
            "citation": "Galatians 3:10",
            "text": `<num data-verse="10"></num>All who rely on works of the law are under a curse. For it is written: “Cursed is everyone who does not continue to do everything written in the Book of the Law.”`
          }
        ]
      },
      {
        "text": " and so became subject to all miseries in this life, death itself, and the pains of hell forever.",
        "references": [
          {
            "citation": "Lamentations 3:39",
            "text": `<num data-verse="39"></num>Why should any mortal man complain,
              in view of his sins?`
          },
          {
            "citation": "Romans 6:23",
            "text": `<num data-verse="23"></num>For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord.`
          },
          {
            "citation": "Matthew 25:41",
            "text": `<num data-verse="41"></num>"Then He will say to those on His left, 'Depart from Me, you who are cursed, into the eternal fire prepared for the devil and his angels.'”`
          },
          {
            "citation": "Matthew 25:46",
            "text": `<num data-verse="46"></num>"And they will go away into eternal punishment, but the righteous into eternal life.”`
          }
        ]
      }
    ],
    "topics": [
      "Fall, The",
      "Humanity",
      "Curse, The",
      "Judgment"
    ],
    "originalQuestion": "What is the misery of that estate whereinto man fell?",
    "originalAnswer": "All mankind by their fall lost communion with God, are under his wrath and curse, and so made liable to all miseries in this life, to death itself, and to the pains of hell for ever.",
    "video": mp4[10],
    "song": mp3[10],
    "color": coloring[22],
    "confession": [
      `“Our first parents ...fell from their original righteousness and communion with God...” - 6.2`,
      ` “...becoming dead in sin...” - 6.2`,
      `“...and we in them whereby death came upon all...” - 6.2`
    ],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "23": {
    "number": 23,
    "section": 2,
    "question": "Did God leave all mankind to perish in the state of sin and misery?",
    "answer": [
      {
        "text": "God, having out of His mere good pleasure, from all eternity, elected some to everlasting life,",
        "references": [
          {
            "citation": "Ephesians 1:4-5",
            "text": `<num data-verse="4"></num>For He chose us in Him before the foundation of the world to be holy and blameless in His presence. In love <num data-verse="5"></num>He predestined us for adoption as His sons through Jesus Christ, according to the good pleasure of His will.`
          }
        ]
      },
      {
        "text": " entered into a covenant of grace to deliver them out of the state of sin and misery and bring them into a state of salvation by a Redeemer.",
        "references": [
          {
            "citation": "Romans 3:20-22",
            "text": `<num data-verse="20"></num>Therefore no one will be justified in His sight by works of the law. For the law merely brings awareness of sin.

<num data-verse="21"></num>But now, apart from the law, the righteousness of God has been revealed, as attested by the Law and the Prophets. <num data-verse="22"></num>And this righteousness from God comes through faith in Jesus Christ to all who believe. There is no distinction,`
          },
          {
            "citation": "Galatians 3:21-22",
            "text": `<num data-verse="21"></num>Is the law, then, opposed to the promises of God? Certainly not! For if a law had been given that could impart life, then righteousness would certainly have come from the law. <num data-verse="22"></num>But the Scripture pronounces all things confined by sin, so that by faith in Jesus Christ the promise might be given to those who believe.`
          }
        ]
      }
    ],
    "topics": [
      "Salvation",
      "God",
      "Goodness",
      "Election"
    ],
    "originalQuestion": "Did God leave all mankind to perish in the estate of sin and misery?",
    "originalAnswer": "God having out of his mere good pleasure, from all eternity, elected some to everlasting life, did enter into a covenant of grace, to deliver them out of the estate of sin and misery, and to bring them into an estate of salvation by a Redeemer.",
    "video": mp4[11],
    "song": mp3[11],
    "color": coloring[23],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "24": {
    "number": 24,
    "section": 3,
    "question": "Who is the Redeemer of God's elect?",
    "answer": [
      {
        "text": "The only Redeemer of God's elect is the Lord Jesus Christ",
        "references": [
          {
            "citation": "1 Timothy 2:5-6",
            "text": `<num data-verse="5"></num>For there is one God, and there is one mediator between God and men, the man Christ Jesus, <num data-verse="6"></num>who gave Himself as a ransom for all—the testimony that was given at just the right time.`
          }
        ]
      },
      {
        "text": " who, being the eternal Son of God, became man.",
        "references": [
          {
            "citation": "John 1:14",
            "text": `<num data-verse="14"></num>The Word became flesh and made His dwelling among us.b We have seen His glory, the glory of the one and only Son from the Father, full of grace and truth.`
          },
          {
            "citation": "Galatians 4:4",
            "text": `<num data-verse="4"></num>But when the time had fully come, God sent His Son, born of a woman, born under the law,`
          }
        ]
      },
      {
        "text": " He was and continues to be God and man in two distinct natures, and one person forever.",
        "references": [
          {
            "citation": "Romans 9:5",
            "text": `<num data-verse="5"></num>Theirs are the patriarchs, and from them proceeds the human descent of Christ, who is God over all, forever worthy of praise! Amen.`
          },
          {
            "citation": "Luke 1:35",
            "text": `<num data-verse="35"></num>The angel replied, “The Holy Spirit will come upon you, and the power of the Most High will overshadow you. So the Holy One to be born will be called the Son of God.`
          },
          {
            "citation": "Colossians 2:9",
            "text": `<num data-verse="9"></num>For in Christ all the fullness of the Deity dwells in bodily form.`
          },
          {
            "citation": "Hebrews 7:24-25",
            "text": `<num data-verse="24"></num>But because Jesus lives forever, He has a permanent priesthood. <num data-verse="25"></num>Therefore He is able to save completely those who draw near to God through Him, since He always lives to intercede for them.`
          }
        ]
      }
    ],
    "topics": [
      "Election",
      "Redemption",
      "God",
      "Jesus",
      "Humanity"
    ],
    "originalQuestion": "Who is the Redeemer of God's elect?",
    "originalAnswer": "The only Redeemer of God's elect is the Lord Jesus Christ; who, being the eternal Son of God, became man, and so was and continueth to be God and man in two distinct natures, and one person for ever.",
    "video": mp4[12],
    "song": mp3[12],
    "color": coloring[24],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "25": {
    "number": 25,
    "section": 3,
    "question": "How did Christ, being the Son of God, become man?",
    "answer": [
      {
        "text": "Christ, the Son of God, became man by taking to himself a real body",
        "references": [
          {
            "citation": "Hebrews 2:14",
            "text": `<num data-verse="14"></num>Now since the children have flesh and blood, He too shared in their humanity, so that by His death He might destroy him who holds the power of death, that is, the devil,`
          },
          {
            "citation": "Hebrews 2:17",
            "text": `<num data-verse="17"></num>For this reason He had to be made like His brothers in every way, so that He might become a merciful and faithful high priest in service to God, in order to make atonement for the sins of the people.`
          },
          {
            "citation": "Hebrews 10:5",
            "text": `<num data-verse="5"></num>Therefore, when Christ came into the world, He said:

  <span class="red-letter">“Sacrifice and offering You did not desire,
    but a body You prepared for Me.</span>`
          }
        ]
      },
      {
        "text": " and a rational soul.",
        "references": [
          {
            "citation": "Matthew 26:38",
            "text": `<num data-verse="26"></num>Then He said to them, <span class="red-letter">“My soul is consumed with sorrow to the point of death. Stay here and keep watch with Me.”</span>`
          }
        ]
      },
      {
        "text": " He was conceived by the power of the Holy Spirit in the womb of the virgin Mary and was born of her,",
        "references": [
          {
            "citation": "Luke 1:27",
            "text": `<num data-verse="27"></num>to a virgin pledged in marriage to a man named Joseph, who was of the house of David. And the virgin's name was Mary.`
          },
          {
            "citation": "Luke 1:31",
            "text": `<num data-verse="31"></num>Behold, you will conceive and give birth to a son, and you are to give Him the name Jesus.`
          },
          {
            "citation": "Luke 1:34-35",
            "text": `<num data-verse="34"></num>“How can this be,” Mary asked the angel, “since I am a virgin?”
            
            <num data-verse="35"></num>The angel replied, “The Holy Spirit will come upon you, and the power of the Most High will overshadow you. So the Holy One to be born will be called the Son of God.`
          },
          {
            "citation": "Luke 1:42",
            "text": `<num data-verse="42"></num>In a loud voice she exclaimed, “Blessed are you among women, and blessed is the fruit of your womb!`
          },
          {
            "citation": "Galatians 4:4",
            "text": `<num data-verse="4"></num>But when the time had fully come, God sent His Son, born of a woman, born under the law,`
          }
        ]
      },
      {
        "text": " yet without sin.",
        "references": [
          {
            "citation": "Hebrews 4:15",
            "text": `<num data-verse="15"></num>For we do not have a high priest who is unable to sympathize with our weaknesses, but we have one who was tempted in every way that we are, yet was without sin.`
          },
          {
            "citation": "Hebrews 7:26",
            "text": `<num data-verse="26"></num>Such a high priest truly befits us—One who is holy, innocent, undefiled, set apart from sinners, and exalted above the heavens.`
          }
        ]
      }
    ],
    "topics": [
      "Jesus",
      "God",
      "Humanity",
      "Holy Spirit"
    ],
    "originalQuestion": "How did Christ, being the Son of God become man?",
    "originalAnswer": "Christ the Son of God became man by taking to himself a true body, and a reasonable soul; being conceived by the power of the Holy Spirit in the womb of the Virgin Mary, and born of her, yet without sin.",
    "video": mp4[13],
    "song": mp3[13],
    "color": coloring[25],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "26": {
    "number": 26,
    "section": 3,
    "question": "What offices does Christ fulfill as our Redeemer?",
    "answer": [
      {
        "text": "Christ, as our Redeemer, fulfills the offices of prophet, priest, and king\u2014both in His state of humiliation and exaltation.",
        "references": [
          {
            "citation": "Acts 3:22",
            "text": `<num data-verse="22"></num>For Moses said, "'The Lord your God will raise up for you a prophet like me from among your brothers. You must listen to Him in everything He tells you.'"`
          },
          {
            "citation": "Hebrews 12:25",
            "text": `<num data-verse="25"></num>See to it that you do not refuse Him who speaks. For if the people did not escape when they refused Him who warned them on earth, how much less will we escape if we reject Him who warns us from heaven?`
          },
          {
            "citation": "2 Corinthians 13:3",
            "text": `<num data-verse="3"></num>since you are demanding proof that Christ is speaking through me. He is not weak in dealing with you but is powerful among you.`
          },
          {
            "citation": "Hebrews 5:5-7",
            "text": `<num data-verse="5">So also Christ did not take upon Himself the glory of becoming a high priest, but He was called by the One who said to Him:
  “You are My Son;
    today I have become Your Father.”
</num><num data-verse="6">And in another passage God says:
  “You are a priest forever
    in the order of Melchizedek.”
</num><num data-verse="7"></num>During the days of Jesus' earthly life, He offered up prayers and petitions with loud cries and tears to the One who could save Him from death, and He was heard because of His reverence.`
          },
          {
            "citation": "Hebrews 7:25",
            "text": `<num data-verse="25"></num>Therefore He is able to save completely those who draw near to God through Him, since He always lives to intercede for them.`
          },
          {
            "citation": "Psalm 2:6",
            "text": `<num data-verse="6"></num>“I have installed My King on Zion,
  upon My holy mountain.”`
          },
          {
            "citation": "Isaiah 9:6-7",
            "text": `<num data-verse="6"></num>For unto us a child is born,
  unto us a son is given,
  and the government will be upon His shoulders.
And He will be called
  Wonderful Counselor, Mighty God,
  Everlasting Father, Prince of Peace.
            <num data-verse="7"></num>Of the increase of His government and peace
  there will be no end.
He will reign on the throne of David
  and over his kingdom,
to establish and sustain it
  with justice and righteousness
  from that time and forevermore.

The zeal of the LORD of Hosts will accomplish this.`
          },
          {
            "citation": "Matthew 21:5",
            "text": `<num data-verse="22"></num>“Say to the Daughter of Zion,
  'See, your King comes to you,
gentle and riding on a donkey,
  on a colt, the foal of a donkey.'”`
          },
          {
            "citation": "Psalm 2:8-11",
            "text": `<num data-verse="8"></num>"Ask Me, and I will make the nations Your inheritance,
  the ends of the earth Your possession."
            <num data-verse="9"></num>You will break them with an iron scepter;
  You will shatter them like pottery.”
            <num data-verse="10"></num>Therefore be wise, O kings;
  be admonished, O judges of the earth.
            <num data-verse="11"></num>Serve the LORD with fear,
  and rejoice with trembling.`
          }
        ]
      }
    ],
    "topics": [
      "Jesus",
      "Redemption"
    ],
    "originalQuestion": "What offices doth Christ execute as our Redeemer?",
    "originalAnswer": "Christ as our Redeemer executeth the offices of a prophet, of a priest, and of king, both in his estate of humiliation and exaltation.",
    "video": mp4[14],
    "song": mp3[14],
    "color": coloring[26],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "27": {
    "number": 27,
    "section": 3,
    "question": "How does Christ fulfill the office of a prophet?",
    "answer": [
      {
        "text": "Christ fulfills the office of prophet in revealing to us, by His Word and Spirit, the will of God for our salvation.",
        "references": [
          {
            "citation": "John 1:18",
            "text": `<num data-verse="18"></num>No one has ever seen God, but the one and only Son, who is Himself God and is at the Father's side, has made Him known.`
          },
          {
            "citation": "1 Peter 1:10-12",
            "text": `<num data-verse="10"></num>Concerning this salvation, the prophets who foretold the grace to come to you searched and investigated carefully, <num data-verse="11"></num>trying to determine the time and setting to which the Spirit of Christ in them was pointing when He predicted the sufferings of Christ and the glories to follow. <num data-verse="12"></num>It was revealed to them that they were not serving themselves, but you, when they foretold the things now announced by those who preached the gospel to you by the Holy Spirit sent from heaven. Even angels long to look into these things.`
          },
          {
            "citation": "John 15:15",
            "text": `<num data-verse="15"></num>No longer do I call you servants, for a servant does not understand what his master is doing. But I have called you friends, because everything I have learned from My Father I have made known to you.`
          },
          {
            "citation": "John 20:31",
            "text": `<num data-verse="31"></num>But these are written so that you may believe that Jesus is the Christ, the Son of God, and that by believing you may have life in His name.`
          }
        ]
      }
    ],
    "topics": [
      "Jesus",
      "Prophet, Office of"
    ],
    "originalQuestion": "How doth Christ execute the office of a prophet?",
    "originalAnswer": "Christ executeth the office of prophet in revealing to us, by his word and Spirit, the will of God for our salvation.",
    "video": mp4[14],
    "song": mp3[14],
    "color": coloring[27],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "28": {
    "number": 28,
    "section": 3,
    "question": "How does Christ fulfill the office of a priest?",
    "answer": [
      {
        "text": "Christ fulfills the office of priest in His offering up Himself once as a sacrifice to satisfy divine justice",
        "references": [
          {
            "citation": "Hebrews 9:14",
            "text": `<num data-verse="14"></num>how much more will the blood of Christ, who through the eternal Spirit offered Himself unblemished to God, purify our consciences from works of death, so that we may serve the living God!`
          },
          {
            "citation": "Hebrews 9:31",
            "text": `<num data-verse="31"></num>so also Christ was offered once to bear the sins of many; and He will appear a second time, not to bear sin, but to bring salvation to those who eagerly await Him.`
          }
        ]
      },
      {
        "text": " and reconcile us to God,",
        "references": [
          {
            "citation": "Hebrews 2:17",
            "text": `<num data-verse="17"></num>For this reason He had to be made like His brothers in every way, so that He might become a merciful and faithful high priest in service to God, in order to make atonement for the sins of the people.`
          }
        ]
      },
      {
        "text": " and in making continual intercession for us.",
        "references": [
          {
            "citation": "Hebrews 7:24-25",
            "text": `<num data-verse="24"></num>But because Jesus lives forever, He has a permanent priesthood. <num data-verse="25"></num>Therefore He is able to save completely those who draw near to God through Him, since He always lives to intercede for them.`
          }
        ]
      }
    ],
    "topics": [
      "Jesus",
      "Office of Christ"
    ],
    "originalQuestion": "How doth Christ execute the office of a priest?",
    "originalAnswer": "Christ executeth the office of priest in his once offering up himself a sacrifice to satisfy divine justice and reconcile us to God, and in making continual intercession for us.",
    "video": mp4[14],
    "song": mp3[14],
    "color": coloring[28],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "29": {
    "number": 29,
    "section": 3,
    "question": "How does Christ fulfill the office of a king?",
    "answer": [
      {
        "text": "Christ fulfills the office of king in: subduing us to Himself,",
        "references": [
          {
            "citation": "Acts 15:14-16",
            "text": `<num data-verse="14"></num>"Simon has told us how God first visited the Gentiles to take from them a people to be His own. <num data-verse="15"></num>The words of the prophets agree with this, as it is written:
            <num data-verse="16"></num>'After this I will return and rebuild
  the fallen tent of David.
Its ruins I will rebuild,
  and I will restore it,'"`
          }
        ]
      },
      {
        "text": " ruling us,",
        "references": [
          {
            "citation": "Isaiah 33:22",
            "text": `<num data-verse="22"></num>`
          }
        ]
      },
      {
        "text": " defending us,",
        "references": [
          {
            "citation": "Isaiah 32:1-2",
            "text": `<num data-verse="1"></num>Woe to you, O destroyer never destroyed,
  O traitor never betrayed!
When you have finished destroying,
  you will be destroyed.
When you have finished betraying,
  you will be betrayed.
<num data-verse="2"></num>O LORD, be gracious to us!
  We wait for You.
Be our strength every morning
  and our salvation in time of trouble.`
          }
        ]
      },
      {
        "text": " and restraining and conquering all His and our enemies.",
        "references": [
          {
            "citation": "1 Corinthians 15:25",
            "text": `<num data-verse="25"></num>For He must reign until He has put all His enemies under His feet.`
          },
          {
            "citation": "Psalm 110",
            "text": `<num data-verse="1"></num>The LORD said to my Lord:
  “Sit at My right hand
until I make Your enemies
  a footstool for Your feet.”
<num data-verse="2"></num>The LORD extends Your mighty scepter from Zion:
  “Rule in the midst of Your enemies.”
<num data-verse="3"></num>Your people shall be willing
  on Your day of battle.
Arrayed in holy splendor, from the womb of the dawn,
  to You belongs the dew of Your youth.
<num data-verse="4"></num>The LORD has sworn
  and will not change His mind:
“You are a priest forever
  in the order of Melchizedek.”
<num data-verse="5"></num>The Lord is at Your right hand;
  He will crush kings in the day of His wrath.
<num data-verse="6"></num>He will judge the nations, heaping up the dead;
  He will crush the leaders far and wide.
<num data-verse="7"></num>He will drink from the brook by the road;
  therefore He will lift up His head.`
          }
        ]
      }
    ],
    "topics": [
      "Jesus",
      "Office of Christ"
    ],
    "originalQuestion": "How doth Christ execute the office of king?",
    "originalAnswer": "Christ executeth the office of a king, in subduing us to himself, 1 in ruling, 2 and defending us, 3 and in restraining and conquering all his and our enemies. 4",
    "video": mp4[14],
    "song": mp3[14],
    "color": coloring[29],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "30": {
    "number": 30,
    "section": 3,
    "question": "Of what did Christ's humiliation consist?",
    "answer": [
      {
        "text": "Christ's humiliation consisted of His: being born, even in a lowly condition;",
        "references": [
          {
            "citation": "Luke 2:7",
            "text": `<num data-verse="7"></num>And she gave birth to her firstborn, a Son. She wrapped Him in swaddling cloths and laid Him in a manger, because there was no room for them in the inn.`
          }
        ]
      },
      {
        "text": " being placed under the law;",
        "references": [
          {
            "citation": "Galatians 4:4",
            "text": `<num data-verse="4"></num>But when the time had fully come, God sent His Son, born of a woman, born under the law,`
          }
        ]
      },
      {
        "text": " undergoing the miseries of this life,",
        "references": [
          {
            "citation": "Hebrews 12:2-3",
            "text": `<num data-verse="2"></num>Let us fix our eyes on Jesus, the author and perfecter of our faith, who for the joy set before Him endured the cross, scorning its shame, and sat down at the right hand of the throne of God. <num data-verse="3"></num>Consider Him who endured such hostility from sinners, so that you will not grow weary and lose heart.`
          },
          {
            "citation": "Isaiah 53:2-3",
            "text": `<num data-verse="2"></num>He grew up before Him like a tender shoot,
  and like a root out of dry ground.
He had no stately form or majesty to attract us,
  no beauty that we should desire Him.
<num data-verse="3"></num>He was despised and rejected by men,
  a man of sorrows, acquainted with grief.
Like one from whom men hide their faces,
  He was despised, and we esteemed Him not.`
          }
        ]
      },
      {
        "text": " the wrath of God,",
        "references": [
          {
            "citation": "Luke 22:44",
            "text": `<num data-verse="44"></num>And in His anguish, He prayed more earnestly, and His sweat became like drops of blood falling to the ground.`
          },
          {
            "citation": "Matthew 27:46",
            "text": `<num data-verse="46"></num>So Pilate released Barabbas to them. But he had Jesus flogged, and handed Him over to be crucified.`
          }
        ]
      },
      {
        "text": " and the cursed death on the cross;",
        "references": [
          {
            "citation": "Philippians 2:8",
            "text": `<num data-verse="8"></num>And being found in appearance as a man,
  He humbled Himself
and became obedient to death—
  even death on a cross.`
          }
        ]
      },
      {
        "text": " of being buried",
        "references": [
          {
            "citation": "1 Corinthians 15:3-4",
            "text": `<num data-verse="3"></num>For what I received I passed on to you as of first importance: that Christ died for our sins according to the Scriptures, <num data-verse="4"></num>that He was buried, that He was raised on the third day according to the Scriptures,`
          }
        ]
      },
      {
        "text": " and continuing under the power of death for a time.",
        "references": [
          {
            "citation": "Acts 2:24-27",
            "text": `<num data-verse="24"></num>But God raised Him from the dead, releasing Him from the agony of death, because it was impossible for death to keep Him in its grip.
<num data-verse="25"></num>David says about Him:
  'I saw the Lord always before me;
    because He is at my right hand, I will not be shaken.
  <num data-verse="26"></num>Therefore my heart is glad and my tongue rejoices;
  my body also will dwell in hope,
    <num data-verse="27"></num>because You will not abandon my soul to Hades,
  nor will You let Your Holy One see decay.`
          },
          {
            "citation": "Acts 2:31",
            "text": `<num data-verse="31"></num>Foreseeing this, David spoke about the resurrection of the Christ, that He was not abandoned to Hades, nor did His body see decay.`
          },
          {
            "citation": "Matthew 12:40",
            "text": `<num data-verse="40"></num>For as Jonah was three days and three nights in the belly of the great fish, so the Son of Man will be three days and three nights in the heart of the earth.`
          }
        ]
      }
    ],
    "topics": [
      "Jesus",
      "Dual Nature"
    ],
    "originalQuestion": "Wherein did Christ's humiliation consist?",
    "originalAnswer": "Christ's humiliation consisted in his being born, and that in a low condition, 1 made under the law, 2 undergoing the miseries of this life, 3 the wrath of God, 4 and the cursed death of the cross; 5 in being buried, 6 and continuing under the power of death for a time. 7",
    "video": mp4[15],
    "song": mp3[15],
    "color": coloring[30],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "31": {
    "number": 31,
    "section": 3,
    "question": "Of what does Christ's exaltation consist?",
    "answer": [
      {
        "text": "Christ's exaltation consists of His: rising again from the dead on the third day;",
        "references": [
          {
            "citation": "1 Corinthians 15:4",
            "text": ``
          }
        ]
      },
      {
        "text": " ascending up into heaven;",
        "references": [
          {
            "citation": "Mark 16:19",
            "text": ``
          }
        ]
      },
      {
        "text": " sitting at the right hand of God the Father;",
        "references": [
          {
            "citation": "Ephesians 1:20",
            "text": ``
          }
        ]
      },
      {
        "text": " and coming to judge the world on the last day.",
        "references": [
          {
            "citation": "Acts 1:11",
            "text": ``
          },
          {
            "citation": "Acts 17:31",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Jesus",
      "Dual Nature",
      "Sovereignty"
    ],
    "originalQuestion": "Wherein consisteth Christ's exaltation?",
    "originalAnswer": "Christ's exaltation consisteth in his rising again from the dead on the third day, 1 in ascending up into heaven, 2 in sitting at the right hand of God the Father, 3 and in coming to judge the world at the last day. 4",
    "video": mp4[16],
    "song": mp3[16],
    "color": coloring[31],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "32": {
    "number": 32,
    "section": 3,
    "question": "How are we made partakers of the redemption purchased by Christ?",
    "answer": [
      {
        "text": "We are made partakers of the redemption purchased by Christ by the effectual application of it to us",
        "references": [
          {
            "citation": "John 1:11-12",
            "text": ``
          }
        ]
      },
      {
        "text": " by His Holy Spirit.",
        "references": [
          {
            "citation": "Titus 3:5-6",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Redemption",
      "Jesus"
    ],
    "originalQuestion": "How are we made partakers of the redemption purchased by Christ?",
    "originalAnswer": "We are made partakers of the redemption purchased by Christ, by the effectual application of it to us 1 by his Holy Spirit. 2",
    "video": mp4[17],
    "song": mp3[17],
    "color": coloring[32],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "33": {
    "number": 33,
    "section": 4,
    "question": "How does the Spirit apply to us the redemption purchased by Christ?",
    "answer": [
      {
        "text": "The Spirit applies to us the redemption purchased by Christ by working faith in us,",
        "references": [
          {
            "citation": "Ephesians 1:13-14",
            "text": ``
          },
          {
            "citation": "John 6:37",
            "text": ``
          },
          {
            "citation": "John 6:39",
            "text": ``
          },
          {
            "citation": "Ephesians 2:8",
            "text": ``
          }
        ]
      },
      {
        "text": " and in doing so uniting us to Christ in our effectual calling.",
        "references": [
          {
            "citation": "Ephesians 3:17",
            "text": ``
          },
          {
            "citation": "1 Corinthians 1:9",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Redemption",
      "Salvation",
      "Jesus",
      "Holy Spirit",
      "Faith"
    ],
    "originalQuestion": "How doth the Spirit apply to us the redemption purchased by Christ?",
    "originalAnswer": "The Spirit applieth to us the redemption purchased by Christ, by working faith in us, 1 and thereby uniting us to Christ, in our effectual calling. 2",
    "video": mp4[18],
    "song": mp3[18],
    "color": coloring[33],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "34": {
    "number": 34,
    "section": 4,
    "question": "What is our effectual calling?",
    "answer": [
      {
        "text": "Effectual calling is the work of God's Spirit;",
        "references": [
          {
            "citation": "2 Timothy 1:9",
            "text": ``
          },
          {
            "citation": "2 Thessalonians 2:13-14",
            "text": ``
          }
        ]
      },
      {
        "text": " by which convincing us of our sin and misery,",
        "references": [
          {
            "citation": "Acts 2:37",
            "text": ``
          }
        ]
      },
      {
        "text": " enlightening our minds in the knowledge of Christ,",
        "references": [
          {
            "citation": "Acts 26:18",
            "text": ``
          }
        ]
      },
      {
        "text": " and renewing our wills,",
        "references": [
          {
            "citation": "Ezekiel 36:26-27",
            "text": ``
          }
        ]
      },
      {
        "text": " He persuades and enables us to embrace Jesus Christ, who is freely offered to us in the gospel.",
        "references": [
          {
            "citation": "John 6:44-45",
            "text": ``
          },
          {
            "citation": "Philippians 2:13",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Holy Spirit",
      "Salvation"
    ],
    "originalQuestion": "What is effectual calling?",
    "originalAnswer": "Effectual calling is the work of God's Spirit, 1 whereby convincing us of our sin and misery, 2 enlightening our minds in the knowledge of Christ, 3 and renewing our wills, 4 he doth persuade and enable us to embrace Jesus Christ freely offered to us in the gospel. 5",
    "video": mp4[19],
    "song": mp3[19],
    "color": coloring[34],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "35": {
    "number": 35,
    "section": 4,
    "question": "Of what benefits do those who are effectually called partake in this life?",
    "answer": [
      {
        "text": "They who are effectually called do in this life partake of justification,",
        "references": [
          {
            "citation": "Romans 8:30",
            "text": ``
          }
        ]
      },
      {
        "text": " adoption,",
        "references": [
          {
            "citation": "Ephesians 1:5",
            "text": ``
          }
        ]
      },
      {
        "text": " sanctification, and the several benefits which in this life either accompany or flow from them.",
        "references": [
          {
            "citation": "1 Corinthians 1:30",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Justification",
      "Adoption",
      "Sanctification"
    ],
    "originalQuestion": "What benefits do they that are effectually called partake of in this life?",
    "originalAnswer": "They that are effectually called do in this life partake of justification, 1 adoption, 2 sanctification, and the several benefits which in this life do either accompany or flow from them. 3",
    "video": mp4[20],
    "song": mp3[20],
    "color": coloring[35],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "36": {
    "number": 36,
    "section": 4,
    "question": "What is justification?",
    "answer": [
      {
        "text": "Justification is an act of God's free grace by which He pardons all our sins",
        "references": [
          {
            "citation": "Romans 3:24-25",
            "text": ``
          },
          {
            "citation": "Romans 4:6-8",
            "text": ``
          }
        ]
      },
      {
        "text": " and accepts us as righteous in His sight,",
        "references": [
          {
            "citation": "2 Corinthians 5:19",
            "text": ``
          },
          {
            "citation": "2 Corinthians 5:21",
            "text": ``
          }
        ]
      },
      {
        "text": " solely because of the righteousness of Christ imputed to us",
        "references": [
          {
            "citation": "Romans 5:17-19",
            "text": ``
          }
        ]
      },
      {
        "text": " and received by faith alone.",
        "references": [
          {
            "citation": "Galatians 2:16",
            "text": ``
          },
          {
            "citation": "Philippians 3:9",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Justification",
      "Redemption",
      "Faith"
    ],
    "originalQuestion": "What is justification?",
    "originalAnswer": "Justification is an act of God's free grace, wherein he pardoneth all our sins, 1 and accepteth us as righteous in his sight, 2 only for the righteousness of Christ imputed to us, 3 and received by faith alone. 4",
    "video": mp4[21],
    "song": mp3[21],
    "color": coloring[36],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "37": {
    "number": 37,
    "section": 4,
    "question": "What is adoption?",
    "answer": [
      {
        "text": "Adoption is the act of God's free grace",
        "references": [
          {
            "citation": "1 John 3:1",
            "text": ``
          }
        ]
      },
      {
        "text": " by which we are received into the number of and have a right to all the privileges of the family of God.",
        "references": [
          {
            "citation": "John 1:12",
            "text": ``
          },
          {
            "citation": "Romans 8:14-17",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Adoption"
    ],
    "originalQuestion": "What is adoption?",
    "originalAnswer": "Adoption is an act of God's free grace, 1 whereby we are received into the number and have a right to all the privileges of the sons of God. 2",
    "video": mp4[22],
    "song": mp3[22],
    "color": coloring[37],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "38": {
    "number": 38,
    "section": 4,
    "question": "What is sanctification?",
    "answer": [
      {
        "text": "Sanctification is the work of God's free grace",
        "references": [
          {
            "citation": "2 Thessalonians 2:13",
            "text": ``
          }
        ]
      },
      {
        "text": " by which we are renewed in every part after the image of God",
        "references": [
          {
            "citation": "Ephesians 4:23-24",
            "text": ``
          }
        ]
      },
      {
        "text": " and enabled more and more to die unto sin and live unto righteousness.",
        "references": [
          {
            "citation": "Romans 6:4",
            "text": ``
          },
          {
            "citation": "Romans 6:6",
            "text": ``
          },
          {
            "citation": "Romans 8:1",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Sanctification"
    ],
    "originalQuestion": "What is sanctification?",
    "originalAnswer": "Sanctification is the work of God's free grace, 1 whereby we are renewed in the whole man after the image of God, 2 and are enabled more and more to die unto sin, and live unto righteousness. 3",
    "video": mp4[22],
    "song": mp3[22],
    "color": coloring[38],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "39": {
    "number": 39,
    "section": 4,
    "question": "What benefits in this life accompany or flow from justification, adoption, and sanctification?",
    "answer": [
      {
        "text": "The benefits in this life that accompany or flow from justification, adoption, and sanctification are: assurance of God's love, peace of conscience,",
        "references": [
          {
            "citation": "Romans 5:1-2",
            "text": ``
          },
          {
            "citation": "Romans 5:5",
            "text": ``
          }
        ]
      },
      {
        "text": " joy in the Holy Spirit,",
        "references": [
          {
            "citation": "Romans 5:5",
            "text": ``
          },
          {
            "citation": "Romans 5:17",
            "text": ``
          }
        ]
      },
      {
        "text": " increase of grace,",
        "references": [
          {
            "citation": "Proverbs 4:18",
            "text": ``
          }
        ]
      },
      {
        "text": " and perseverance in it to the end.",
        "references": [
          {
            "citation": "1 John 5:13",
            "text": ``
          },
          {
            "citation": "1 Peter 1:5",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Sanctification",
      "Adoption",
      "Justification"
    ],
    "originalQuestion": "What are the benefits which in this life do accompany or flow from justification, adoption, and sanctification?",
    "originalAnswer": "The benefits which in this life do accompany or flow from justification, adoption, and sanctification, are assurance of God's love, peace of conscience, 1 joy in the Holy Spirit, 2 increase of grace, 3 and perseverance therein to the end. 4",
    "video": mp4[23],
    "song": mp3[23],
    "color": coloring[39],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "40": {
    "number": 40,
    "section": 4,
    "question": "What benefits do believers receive from Christ at their death?",
    "answer": [
      {
        "text": "At death, the souls of believers are made perfect in holiness",
        "references": [
          {
            "citation": "Hebrews 12:23",
            "text": ``
          }
        ]
      },
      {
        "text": " and immediately pass into glory.",
        "references": [
          {
            "citation": "2 Corinthians 5:1",
            "text": ``
          },
          {
            "citation": "2 Corinthians 5:6",
            "text": ``
          },
          {
            "citation": "2 Corinthians 5:8",
            "text": ``
          },
          {
            "citation": "Philippians 1:23",
            "text": ``
          },
          {
            "citation": "Luke 23:43",
            "text": ``
          }
        ]
      },
      {
        "text": " Their bodies, being still united to Christ,",
        "references": [
          {
            "citation": "1 Thessalonians 4:14",
            "text": ``
          }
        ]
      },
      {
        "text": " rest in their graves",
        "references": [
          {
            "citation": "Isaiah 57:2",
            "text": ``
          }
        ]
      },
      {
        "text": " until the resurrection.",
        "references": [
          {
            "citation": "Job 19:26-27",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Eternal Life",
      "Death"
    ],
    "originalQuestion": "What benefits do believers receive from Christ at their death?",
    "originalAnswer": "The souls of believers are at their death made perfect in holiness, 1 and do immediately pass into glory; 2 and their bodies being still united to Christ, 3 do rest in their graves 4 till the resurrection. 5",
    "video": mp4[24],
    "song": mp3[24],
    "color": coloring[40],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "41": {
    "number": 41,
    "section": 4,
    "question": "What benefits do believers receive from Christ at the resurrection?",
    "answer": [
      {
        "text": "At the resurrection, believers, being raised up in glory,",
        "references": [
          {
            "citation": "1 Corinthians 15:43",
            "text": ``
          }
        ]
      },
      {
        "text": " shall be openly acknowledged and acquitted on the day of judgment,",
        "references": [
          {
            "citation": "Matthew 25:23",
            "text": ``
          },
          {
            "citation": "Matthew 10:32",
            "text": ``
          }
        ]
      },
      {
        "text": " and made perfectly blessed both in soul and body, in the full enjoyment of God",
        "references": [
          {
            "citation": "1 John 3:2",
            "text": ``
          },
          {
            "citation": "1 Corinthians 13:12",
            "text": ``
          }
        ]
      },
      {
        "text": " for all eternity.",
        "references": [
          {
            "citation": "1 Thessalonians 4:17-18",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Eternal Life",
      "God"
    ],
    "originalQuestion": "What benefits do believers receive from Christ at the resurrection?",
    "originalAnswer": "At the resurrection believers, being raised up in glory, 1 shall be openly acknowledged, and acquitted in the day of judgment, 2 and made perfectly blessed, both in soul and body, in the full enjoyment of God 3 to all eternity. 4",
    "video": mp4[24],
    "song": mp3[24],
    "color": coloring[41],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "42": {
    "number": 42,
    "section": 5,
    "question": "What shall be done to the wicked at their death?",
    "answer": [
      {
        "text": "At their death, the souls of the wicked shall be cast into the torments of hell while their bodies lie in their graves until the resurrection and judgment on the great day.",
        "references": [
          {
            "citation": "Luke 16:23-24",
            "text": ``
          },
          {
            "citation": "Acts 2:24",
            "text": ``
          },
          {
            "citation": "Jude 1:5",
            "text": ``
          },
          {
            "citation": "Jude 1:7",
            "text": ``
          },
          {
            "citation": "1 Peter 3:19",
            "text": ``
          },
          {
            "citation": "Psalm 49:14",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Death",
      "Judgment"
    ],
    "originalQuestion": "But what shall be done to the wicked at their death?",
    "originalAnswer": "The souls of the wicked shall, at their death, be cast into the torments of hell, and their bodies lie in their graves, till the resurrection and judgment of the great day.",
    "video": mp4[25],
    "song": mp3[25],
    "color": coloring[42],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "43": {
    "number": 43,
    "section": 5,
    "question": "What shall be done to the wicked on the day of judgment?",
    "answer": [
      {
        "text": "On the day of judgment, the bodies of the wicked\u2014being raised out of their graves\u2014shall be sentenced, together with their souls, to unspeakable torments with the devil and his angels forever.",
        "references": [
          {
            "citation": "John 5:28-29",
            "text": ``
          },
          {
            "citation": "Matthew 25:41",
            "text": ``
          },
          {
            "citation": "Matthew 25:46",
            "text": ``
          },
          {
            "citation": "2 Thessalonians 1:8-9",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Judgment"
    ],
    "originalQuestion": "What shall be done to the wicked, at the day of judgment?",
    "originalAnswer": "At the day of judgment the bodies of the wicked, being raised out of their graves, shall be sentenced, together with their souls, to unspeakable torments with the devil and his angels for ever.",
    "video": mp4[25],
    "song": mp3[25],
    "color": coloring[43],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "44": {
    "number": 44,
    "section": 5,
    "question": "What is the duty God requires of man?",
    "answer": [
      {
        "text": "The duty God requires of man is obedience to His revealed will.",
        "references": [
          {
            "citation": "Micah 6:8",
            "text": ``
          },
          {
            "citation": "1 Samuel 15:22",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Obedience",
      "God",
      "Humanity"
    ],
    "originalQuestion": "What is the duty which God requireth of man?",
    "originalAnswer": "The duty which God requireth of man is, obedience to his revealed will.",
    "video": mp4[26],
    "song": mp3[26],
    "color": coloring[44],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "45": {
    "number": 45,
    "section": 5,
    "question": "What did God at first reveal to man for the rule of his obedience?",
    "answer": [
      {
        "text": "The rule that God at first revealed to man for his obedience was the moral law.",
        "references": [
          {
            "citation": "Romans 2:14-15",
            "text": ``
          },
          {
            "citation": "Romans 10:5",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Obedience",
      "Ten Commandments, The"
    ],
    "originalQuestion": "What did God at first reveal to man for the rule of his obedience?",
    "originalAnswer": "The rule which God at first revealed to man for his obedience, was the moral law.",
    "video": mp4[26],
    "song": mp3[26],
    "color": coloring[45],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "46": {
    "number": 46,
    "section": 6,
    "question": "Where is the moral law readily understood?",
    "answer": [
      {
        "text": "The moral law is readily understood in the Ten Commandments.",
        "references": [
          {
            "citation": "Deuteronomy 10:4",
            "text": ``
          },
          {
            "citation": "Matthew 19:17",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Ten Commandments, The"
    ],
    "originalQuestion": "Where is the moral law summarily comprehended?",
    "originalAnswer": "The moral law is summarily comprehended in the ten commandments.",
    "video": mp4[27],
    "song": mp3[27],
    "color": coloring[46],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "47": {
    "number": 47,
    "section": 6,
    "question": "What is the sum of the ten commandments?",
    "answer": [
      {
        "text": "The sum of the Ten Commandments is: love the Lord our God with all our heart, soul, mind, and strength; and our neighbor as ourselves.",
        "references": [
          {
            "citation": "Matthew 22:37-40",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Ten Commandments, The",
      "God",
      "Obedience"
    ],
    "originalQuestion": "What is the sum of the ten commandments?",
    "originalAnswer": "The sum of the ten commandments is, to love the Lord our God, with all our heart, with all our soul, with all our strength, and with all our mind; and our neighbour as ourselves.",
    "video": mp4[27],
    "song": mp3[27],
    "color": coloring[47],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "48": {
    "number": 48,
    "section": 6,
    "question": "What is the preface to the Ten Commandments?",
    "answer": [
      {
        "text": "The preface to the Ten Commandments is: \"I am the Lord your God, who brought you out of the land of Egypt, out of the house of slavery.\"",
        "references": [
          {
            "citation": "Exodus 20:2",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Ten Commandments, The",
      "God"
    ],
    "originalQuestion": "What is the preface to the ten commandments?",
    "originalAnswer": "The preface to the ten commandments is in these words; I am the Lord thy God which have brought thee out of the land of Egypt, out of the house of bondage.",
    "video": mp4[28],
    "song": mp3[28],
    "color": coloring[48],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "49": {
    "number": 49,
    "section": 6,
    "question": "What does the preface to the Ten Commandments teach us?",
    "answer": [
      {
        "text": "The preface to the Ten Commandments teaches us that because God is the Lord\u2014and our God and Redeemer\u2014we are therefore bound to keep all His commandments.",
        "references": [
          {
            "citation": "Luke 1:74-75",
            "text": ``
          },
          {
            "citation": "1 Peter 1:15-19",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Ten Commandments, The",
      "God",
      "Sovereignty",
      "Obedience"
    ],
    "originalQuestion": "What doth the preface to the ten commandments teach us?",
    "originalAnswer": "The preface to the ten commandments teacheth us that because God is the Lord, and our God and redeemer, therefore we are bound to keep all his commandments.",
    "video": mp4[28],
    "song": mp3[28],
    "color": coloring[49],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "50": {
    "number": 50,
    "section": 6,
    "question": "What is the first commandment?",
    "answer": [
      {
        "text": "The first commandment is: \"You shall have no other gods before Me.\"",
        "references": [
          {
            "citation": "Exodus 20:3",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Ten Commandments, The",
      "God"
    ],
    "originalQuestion": "Which is the first commandment?",
    "originalAnswer": "The first commandment is, Thou shalt have no other gods before me.",
    "video": mp4[29],
    "song": mp3[29],
    "color": coloring[50],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "51": {
    "number": 51,
    "section": 6,
    "question": "What is required in the first commandment?",
    "answer": [
      {
        "text": "The first commandment requires us to know and acknowledge God to be the only true God and our God,",
        "references": [
          {
            "citation": "1 Chronicles 28:9",
            "text": ``
          },
          {
            "citation": "Deuteronomy 26:17",
            "text": ``
          }
        ]
      },
      {
        "text": " and to worship and glorify Him accordingly.",
        "references": [
          {
            "citation": "Matthew 4:10",
            "text": ``
          },
          {
            "citation": "Psalm 29:2",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Ten Commandments, The",
      "God",
      "Worship",
      "Obedience"
    ],
    "originalQuestion": "What is required in the first commandment?",
    "originalAnswer": "The first commandment requireth us to know and acknowledge God to be the only true God and our God, 1 and to worship and glorify him accordingly.",
    "video": mp4[29],
    "song": mp3[29],
    "color": coloring[51],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "52": {
    "number": 52,
    "section": 6,
    "question": "What is forbidden in the first commandment?",
    "answer": [
      {
        "text": "The first commandment forbids denying",
        "references": [
          {
            "citation": "Psalm 14:1",
            "text": ``
          }
        ]
      },
      {
        "text": " or not worshiping and glorifying the true God ",
        "references": [
          {
            "citation": "Romans 1:21",
            "text": ``
          }
        ]
      },
      {
        "text": "as God and our God,",
        "references": [
          {
            "citation": "Psalm 81:10-11",
            "text": ``
          }
        ]
      },
      {
        "text": " and giving the worship and glory to any other that is due unto Him alone.",
        "references": [
          {
            "citation": "Romans 1:25-26",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Ten Commandments, The",
      "God",
      "Worship"
    ],
    "originalQuestion": "What is forbidden in the first commandment?",
    "originalAnswer": "The first commandment forbiddeth the denying, 1 or not worshipping and glorifying the true God, 2 as God and our God, 3 and the giving of that worship and glory to any other, which is due unto him alone.",
    "video": mp4[30],
    "song": mp3[30],
    "color": coloring[52],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "53": {
    "number": 53,
    "section": 6,
    "question": "What do the words \"before me\" in the first commandment especially teach us?",
    "answer": [
      {
        "text": "The words \"before me\" in the first commandment teach us that God, who sees all things, takes notice of and is much displeased with the sin of having any other god.",
        "references": [
          {
            "citation": "Exodus 8:5-32",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Ten Commandments, The",
      "God",
      "Sin",
      "Worship"
    ],
    "originalQuestion": "What are we especially taught by these words before me, in the first commandment?",
    "originalAnswer": "These words before me, in the first commandment teach us, that God, who seeth all things, taketh notice of and is much displeased with the sin of having any other God.",
    "video": mp4[30],
    "song": mp3[30],
    "color": coloring[53],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "54": {
    "number": 54,
    "section": 6,
    "question": "What is the second commandment?",
    "answer": [
      {
        "text": "The second commandment is: \"You shall not make for yourself an idol in the form of anything in the heavens above, on the earth below, or in the waters beneath. You shall not bow down to them or worship them; for I, the LORD your God, am a jealous God, visiting the iniquity of the fathers on their children to the third and fourth generations of those who hate Me, but showing loving devotion to a thousand generations of those who love Me and keep My commandments.\"",
        "references": [
          {
            "citation": "Exodus 20:4-6",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Ten Commandments, The",
      "God",
      "Worship",
      "Faith"
    ],
    "originalQuestion": "Which is the second commandment?",
    "originalAnswer": "The second commandment is, Thou shalt not make unto thee any graven image, or any likeness of anything that is in heaven above, or that is in the earth beneath, or that is in the water under the earth; thou shalt not bow down thyself to them, nor serve them; for I the Lord thy God am a jealous God, visiting the iniquity of the fathers upon the children unto the third and fourth generation of them that hate me; and shewing mercy unto thousands of them that love me, and keep my commandments.",
    "video": mp4[31],
    "song": mp3[31],
    "color": coloring[54],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "55": {
    "number": 55,
    "section": 6,
    "question": "What is required in the second commandment?",
    "answer": [
      {
        "text": "The second commandment requires us to receive, observe, and keep pure and whole all such religious worship and ordinances as God has appointed in His Word.",
        "references": [
          {
            "citation": "Deuteronomy 32:46",
            "text": ``
          },
          {
            "citation": "Matthew 23:20",
            "text": ``
          },
          {
            "citation": "Acts 2:42",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Ten Commandments, The",
      "Worship",
      "God"
    ],
    "originalQuestion": "What is required in the second commandment?",
    "originalAnswer": "The second commandment requireth the receiving, observing, and keeping pure and entire all such religious worship and ordinances, as God hath appointed in his word.",
    "video": mp4[32],
    "song": mp3[32],
    "color": coloring[55],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "56": {
    "number": 56,
    "section": 6,
    "question": "What is forbidden in the second commandment?",
    "answer": [
      {
        "text": "The second commandment forbids the worshiping of God through images",
        "references": [
          {
            "citation": "Deuteronomy 4:15-19",
            "text": ``
          },
          {
            "citation": "Exodus 32:5",
            "text": ``
          },
          {
            "citation": "Exodus 32:8",
            "text": ``
          }
        ]
      },
      {
        "text": " or any other way not appointed in His Word.",
        "references": [
          {
            "citation": "Deuteronomy 12:31-32",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Ten Commandments, The",
      "God",
      "Worship"
    ],
    "originalQuestion": "What is forbidden in the second commandment?",
    "originalAnswer": "The second commandment forbiddeth the worshipping of God by images 1 or any other way not appointed in his word. 2",
    "video": mp4[32],
    "song": mp3[32],
    "color": coloring[56],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "57": {
    "number": 57,
    "section": 6,
    "question": "What are the reasons attached to the second commandment?",
    "answer": [
      {
        "text": "The reasons attached to the second commandment are: God's sovereignty over us,",
        "references": [
          {
            "citation": "Psalm 45:2-3",
            "text": ``
          },
          {
            "citation": "Psalm 45:6",
            "text": ``
          }
        ]
      },
      {
        "text": " His ownership of us,",
        "references": [
          {
            "citation": "Psalm 45:11",
            "text": ``
          }
        ]
      },
      {
        "text": " and the zeal He has toward His own worship.",
        "references": [
          {
            "citation": "Exodus 34:13-14",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Ten Commandments, The",
      "God",
      "Worship"
    ],
    "originalQuestion": "What are the reasons annexed to the second commandment?",
    "originalAnswer": "The reasons annexed to the second commandment are, God's sovereignty over us, 1 his propriety in us, 2 and the zeal he hath to his own worship. 3",
    "video": mp4[32],
    "song": mp3[32],
    "color": coloring[57],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "58": {
    "number": 58,
    "section": 6,
    "question": "What is the third commandment?",
    "answer": [
      {
        "text": "The third commandment is: \"You shall not take the name of the LORD your God in vain, for the LORD will not leave anyone unpunished who takes His name in vain.\"",
        "references": [
          {
            "citation": "Exodus 20:7",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Ten Commandments, The",
      "God",
      "Holiness",
      "Reverence"
    ],
    "originalQuestion": "Which is the third commandment?",
    "originalAnswer": "The third commandment is, Thou shalt not take the name of the Lord thy God in vain; for the Lord will not hold him guiltless that taketh his name in vain.",
    "video": mp4[33],
    "song": mp3[33],
    "color": coloring[58],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "59": {
    "number": 59,
    "section": 6,
    "question": "What is required in the third commandment?",
    "answer": [
      {
        "text": "The third commandment requires the holy and reverent use of God's names,",
        "references": [
          {
            "citation": "Matthew 6:9",
            "text": ``
          },
          {
            "citation": "Deuteronomy 28:58",
            "text": ``
          }
        ]
      },
      {
        "text": " titles,",
        "references": [
          {
            "citation": "Psalm 68:4",
            "text": ``
          }
        ]
      },
      {
        "text": " attributes,",
        "references": [
          {
            "citation": "Revelation 15:3-4",
            "text": ``
          }
        ]
      },
      {
        "text": " ordinances,",
        "references": [
          {
            "citation": "Malachi 1:11",
            "text": ``
          },
          {
            "citation": "Malachi 1:14",
            "text": ``
          }
        ]
      },
      {
        "text": " Word,",
        "references": [
          {
            "citation": "Psalm 136:1-2",
            "text": ``
          }
        ]
      },
      {
        "text": " and works.",
        "references": [
          {
            "citation": "Job 36:24",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Ten Commandments, The",
      "God",
      "Holiness",
      "Reverence"
    ],
    "originalQuestion": "What is required in the third commandment?",
    "originalAnswer": "The third commandment requireth the holy and reverent use of God's names, 1 titles, 2 attributes, 3 ordinances, 4 word 5 and works. 6",
    "video": mp4[33],
    "song": mp3[33],
    "color": coloring[59],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "60": {
    "number": 60,
    "section": 6,
    "question": "What is forbidden in the third commandment?",
    "answer": [
      {
        "text": "The third commandment forbids all profaning and abusing of anything by which God makes Himself known.",
        "references": [
          {
            "citation": "Malachi 1:6-7",
            "text": ``
          },
          {
            "citation": "Malachi 1:12",
            "text": ``
          },
          {
            "citation": "Malachi 2:2",
            "text": ``
          },
          {
            "citation": "Malachi 3:14",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Ten Commandments, The",
      "God",
      "Holiness"
    ],
    "originalQuestion": "What is forbidden in the third commandment?",
    "originalAnswer": "The third commandment forbiddeth all profaning and abusing of any thing whereby God makes himself known.",
    "video": mp4[34],
    "song": mp3[34],
    "color": coloring[60],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "61": {
    "number": 61,
    "section": 6,
    "question": "What is the reason attached to the third commandment?",
    "answer": [
      {
        "text": "The reason attached to the third commandment is thus: the breakers of this commandment may escape punishment from men, yet the Lord our God will not suffer them to escape His righteous judgment.",
        "references": [
          {
            "citation": "1 Samuel 2:12",
            "text": ``
          },
          {
            "citation": "1 Samuel 2:17",
            "text": ``
          },
          {
            "citation": "1 Samuel 2:22",
            "text": ``
          },
          {
            "citation": "1 Samuel 2:29",
            "text": ``
          },
          {
            "citation": "1 Samuel 3:13",
            "text": ``
          },
          {
            "citation": "Deuteronomy 28:58-59",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Ten Commandments, The",
      "God",
      "Holiness"
    ],
    "originalQuestion": "What is the reason annexed to the third commandment?",
    "originalAnswer": "The reason annexed to the third commandment is, that however the breakers of this commandment may escape punishment from men, yet the Lord our God will not suffer them to escape his righteous judgment.",
    "video": mp4[34],
    "song": mp3[34],
    "color": coloring[61],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "62": {
    "number": 62,
    "section": 6,
    "question": "What is the fourth commandment?",
    "answer": [
      {
        "text": "The fourth commandment is: \"Remember the Sabbath day by keeping it holy. Six days you shall labor and do all your work, but the seventh day is a Sabbath to the LORD your God, on which you must not do any work\u2014neither you, nor your son or daughter, nor your manservant or maidservant or livestock, nor the foreigner within your gates. For in six days the LORD made the heavens and the earth and the sea and all that is in them, but on the seventh day He rested. Therefore the LORD blessed the Sabbath day and set it apart as holy.\"",
        "references": [
          {
            "citation": "Exodus 20:8-11",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Ten Commandments, The"
    ],
    "originalQuestion": "What is the fourth commandment?",
    "originalAnswer": "The fourth commandment is, Remember the Sabbath day to keep it holy; six days shalt thou labour and do all thy work; but the seventh day is the Sabbath of the Lord thy God, in it thou shalt not do any work, thou, nor thy son, nor thy daughter, nor thy man-servant, nor thy maid-servant, nor thy cattle, nor the stranger that is within thy gates; for in six days the Lord made heaven and earth, the sea, and all that in them is, and rested the seventh day; wherefore the Lord blessed the Sabbath day and hallowed it.",
    "video": mp4[35],
    "song": mp3[35],
    "color": coloring[62],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "63": {
    "number": 63,
    "section": 6,
    "question": "What is required in the fourth commandment?",
    "answer": [
      {
        "text": "The fourth commandment requires keeping holy to God one whole day in seven to be a Sabbath to Himself.",
        "references": [
          {
            "citation": "Exodus 20:8-11",
            "text": ``
          },
          {
            "citation": "Deuteronomy 5:12-14",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Ten Commandments, The"
    ],
    "originalQuestion": "What is required in the fourth commandment?",
    "originalAnswer": "The fourth commandment requireth the keeping holy to God one whole day in seven to be a Sabbath to Himself.",
    "video": mp4[36],
    "song": mp3[36],
    "color": coloring[63],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "64": {
    "number": 64,
    "section": 6,
    "question": "Which day of the seven has God appointed to be the weekly Sabbath?",
    "answer": [
      {
        "text": "Before the resurrection of Christ, God appointed the seventh day of the week to be the weekly Sabbath;",
        "references": [
          {
            "citation": "Exodus 20:8-11; Deuteronomy 5:12-14",
            "text": ``
          }
        ]
      },
      {
        "text": " ever since, the first day of the week is the Christian Sabbath\u2014it shall be until the end of the world.",
        "references": [
          {
            "citation": "Psalm 118:24",
            "text": ``
          },
          {
            "citation": "Matthew 28:1",
            "text": ``
          },
          {
            "citation": "Mark 2:27-28",
            "text": ``
          },
          {
            "citation": "John 20:19-20",
            "text": ``
          },
          {
            "citation": "John 20:26",
            "text": ``
          },
          {
            "citation": "Revelation 1:10",
            "text": ``
          },
          {
            "citation": "Mark 16:2",
            "text": ``
          },
          {
            "citation": "Luke 24:1",
            "text": ``
          },
          {
            "citation": "Luke 24:30-36",
            "text": ``
          },
          {
            "citation": "John 20:1",
            "text": ``
          },
          {
            "citation": "Acts 1:3",
            "text": ``
          },
          {
            "citation": "Acts 2:1-2",
            "text": ``
          },
          {
            "citation": "Acts 20:7",
            "text": ``
          },
          {
            "citation": "1 Corinthians 16:1-2",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Ten Commandments, The"
    ],
    "originalQuestion": "Which day of the seven hath God appointed to be the weekly Sabbath?",
    "originalAnswer": "Before the resurrection of Christ, God appointed the seventh day of the week to be the weekly Sabbath; 1 and the first day of the week ever since, to continue to the end of the world, which is the Christian Sabbath. 2",
    "video": mp4[36],
    "song": mp3[36],
    "color": coloring[64],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "65": {
    "number": 65,
    "section": 6,
    "question": "How is the Sabbath to be sanctified?",
    "answer": [
      {
        "text": "The Sabbath is to be sanctified by a holy resting all that day,",
        "references": [
          {
            "citation": "Exodus 20:8",
            "text": ``
          },
          {
            "citation": "Exodus 20:10",
            "text": ``
          }
        ]
      },
      {
        "text": " even from worldly employments and recreation lawful on other days;",
        "references": [
          {
            "citation": "Exodus 16:25-28; Nehemiah 13:15-22",
            "text": ``
          }
        ]
      },
      {
        "text": " and spending the whole time in the public and private exercises of God's worship,",
        "references": [
          {
            "citation": "Luke 4:16",
            "text": ``
          },
          {
            "citation": "Acts 20:7",
            "text": ``
          },
          {
            "citation": "Psalm 92 (Hebrew Title)",
            "text": ``
          },
          {
            "citation": "Isaiah 66:23",
            "text": ``
          }
        ]
      },
      {
        "text": " except for what is to be taken up in the work of necessity and mercy.",
        "references": [
          {
            "citation": "Matthew 12:1-13",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Ten Commandments, The"
    ],
    "originalQuestion": "How is the Sabbath to be sanctified?",
    "originalAnswer": "The Sabbath is to be sanctified by a holy resting all that day, 1 even from such worldly employments and recreations as are lawful on other days; 2 and spending the whole time in the public and private exercises of God's worship, 3 except so much as is to be taken up in the works of necessity and mercy. 4",
    "video": mp4[37],
    "song": mp3[37],
    "color": coloring[65],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "66": {
    "number": 66,
    "section": 6,
    "question": "What is forbidden in the fourth commandment?",
    "answer": [
      {
        "text": "The fourth commandment forbids: the omission or careless performance of the duties required;",
        "references": [
          {
            "citation": "Ezekiel 22:26",
            "text": ``
          },
          {
            "citation": "Amos 8:5",
            "text": ``
          },
          {
            "citation": "Malachi 1:13",
            "text": ``
          }
        ]
      },
      {
        "text": " profaning the day by idleness,",
        "references": [
          {
            "citation": "Acts 20:7",
            "text": ``
          },
          {
            "citation": "Acts 20:9",
            "text": ``
          }
        ]
      },
      {
        "text": " or doing that which is in itself sinful,",
        "references": [
          {
            "citation": "Ezekiel 23:38",
            "text": ``
          }
        ]
      },
      {
        "text": " or by unnecessary thoughts, words, or works about worldly employments or recreation.",
        "references": [
          {
            "citation": "Jeremiah 17:24-27",
            "text": ``
          },
          {
            "citation": "Isaiah 58:13",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Ten Commandments, The",
      "Obedience"
    ],
    "originalQuestion": "What is forbidden in the fourth commandment?",
    "originalAnswer": "The fourth commandment forbiddeth the omission or careless performance of the duties required, 1 and the profaning the day by idleness, 2 or doing that which is in itself sinful, 3 or by unnecessary thoughts, words, or works, about worldly employments or recreations. 4",
    "video": mp4[38],
    "song": mp3[38],
    "color": coloring[66],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "67": {
    "number": 67,
    "section": 6,
    "question": "What are the reasons attached to the fourth commandment?",
    "answer": [
      {
        "text": "The reasons attached to the fourth commandment are: God's allowing us six days of the week for our own lawful employments,",
        "references": [
          {
            "citation": "Exodus 20:9",
            "text": ``
          }
        ]
      },
      {
        "text": " His deserved exclusive possession of a seventh day, His own example, and His blessing of the Sabbath day.",
        "references": [
          {
            "citation": "Exodus 20:11",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Ten Commandments, The"
    ],
    "originalQuestion": "What are the reasons annexed to the fourth commandment?",
    "originalAnswer": "The reasons annexed to the fourth commandment, are God's allowing us six days of the week for our own lawful employments, 1 his challenging a special propriety in a seventh, his own example, and his blessing the Sabbath day. 2",
    "video": mp4[38],
    "song": mp3[38],
    "color": coloring[67],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "68": {
    "number": 68,
    "section": 6,
    "question": "What is the fifth commandment?",
    "answer": [
      {
        "text": "The fifth commandment is: \"Honor your father and mother, so that your days may be long in the land that the LORD your God is giving you.\"",
        "references": [
          {
            "citation": "Exodus 20:12",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Ten Commandments, The",
      "Obedience"
    ],
    "originalQuestion": "Which is the fifth commandment?",
    "originalAnswer": "The fifth commandment is, Honor thy father and thy mother; that thy days may be long in the land which the Lord thy God giveth thee.",
    "video": mp4[39],
    "song": mp3[39],
    "color": coloring[68],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "69": {
    "number": 69,
    "section": 6,
    "question": "What is required in the fifth commandment?",
    "answer": [
      {
        "text": "The fifth commandment requires preserving the honor of and performing the duties belonging to everyone in their various roles and relationships\u2014whether as superiors,",
        "references": [
          {
            "citation": "Ephesians 5:21",
            "text": ``
          }
        ]
      },
      {
        "text": " subordinates,",
        "references": [
          {
            "citation": "1 Peter 2:17",
            "text": ``
          }
        ]
      },
      {
        "text": " or equals.",
        "references": [
          {
            "citation": "Romans 12:10",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Ten Commandments, The"
    ],
    "originalQuestion": "What is required in the fifth commandment?",
    "originalAnswer": "The fifth commandment requireth the preserving the honour and performing the duties belonging to every one in their several places and relations, as superiors, 1 inferiors, 2 or equals. 3",
    "video": mp4[39],
    "song": mp3[39],
    "color": coloring[69],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "70": {
    "number": 70,
    "section": 6,
    "question": "What is forbidden in the fifth commandment?",
    "answer": [
      {
        "text": "The fifth commandment forbids neglecting or acting against the honor and duty that belong to everyone in their various places and relationships.",
        "references": [
          {
            "citation": "Matthew 15:4-6",
            "text": ``
          },
          {
            "citation": "Ezekiel 34:24",
            "text": ``
          },
          {
            "citation": "Romans 13:8",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Ten Commandments, The"
    ],
    "originalQuestion": "What is forbidden in the fifth commandment?",
    "originalAnswer": "The fifth commandment forbiddeth the neglect of, or doing any thing against the honour and duty which belongeth to every one in their several places and relations.",
    "video": mp4[40],
    "song": mp3[40],
    "color": coloring[70],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "71": {
    "number": 71,
    "section": 6,
    "question": "What is the reason attached to the fifth commandment?",
    "answer": [
      {
        "text": "The reason attached to the fifth commandment is the promise of long life and prosperity\u2014as far as it serves God's glory and their own good\u2014to all who keep this commandment.",
        "references": [
          {
            "citation": "Deuteronomy 5:16",
            "text": ``
          },
          {
            "citation": "Ephesians 6:2-3",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Ten Commandments, The"
    ],
    "originalQuestion": "What is the reason annexed to the fifth commandment?",
    "originalAnswer": "The reason annexed to the fifth commandment is a promise of long life and prosperity (as far as it shall serve for God's glory, and their own good) to all such as keep this commandment.",
    "video": mp4[40],
    "song": mp3[40],
    "color": coloring[71],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "72": {
    "number": 72,
    "section": 6,
    "question": "What is the sixth commandment?",
    "answer": [
      {
        "text": "The sixth commandment is, \"You shall not murder.\"",
        "references": [
          {
            "citation": "Exodus 20:13",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Ten Commandments, The"
    ],
    "originalQuestion": "What is the sixth commandment?",
    "originalAnswer": "The sixth commandment is, Thou shalt not kill.",
    "video": mp4[41],
    "song": mp3[41],
    "color": coloring[72],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "73": {
    "number": 73,
    "section": 6,
    "question": "What is required in the sixth commandment?",
    "answer": [
      {
        "text": "The sixth commandment requires all lawful endeavors to preserve both our own life",
        "references": [
          {
            "citation": "Ephesians 5:28-29",
            "text": ``
          }
        ]
      },
      {
        "text": " and the life of others.",
        "references": [
          {
            "citation": "1 Kings 18:4",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Ten Commandments, The"
    ],
    "originalQuestion": "What is required in the sixth commandment?",
    "originalAnswer": "The sixth commandment requireth all lawful endeavours to preserve our own life 1 and the life of others. 2",
    "video": mp4[41],
    "song": mp3[41],
    "color": coloring[73],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "74": {
    "number": 74,
    "section": 6,
    "question": "What is forbidden in the sixth commandment?",
    "answer": [
      {
        "text": "The sixth commandment absolutely forbids taking our own life or the life of our neighbor unjustly, or whatsoever leads to such acts.",
        "references": [
          {
            "citation": "Acts 26:28",
            "text": ``
          },
          {
            "citation": "Genesis 9:9",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Ten Commandments, The"
    ],
    "originalQuestion": "What is forbidden in the sixth commandment?",
    "originalAnswer": "The sixth commandment absolutely forbiddeth the taking away of our own life, or the life of our neighbour unjustly, or whatsoever tendeth thereunto.",
    "video": mp4[41],
    "song": mp3[41],
    "color": coloring[74],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "75": {
    "number": 75,
    "section": 6,
    "question": "What is the seventh commandment?",
    "answer": [
      {
        "text": "The seventh commandment is: \"You shall not commit adultery.\"",
        "references": [
          {
            "citation": "Exodus 20:14",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Ten Commandments, The"
    ],
    "originalQuestion": "Which is the seventh commandment?",
    "originalAnswer": "The seventh commandment is, Thou shalt not commit adultery.",
    "video": mp4[42],
    "song": mp3[42],
    "color": coloring[75],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "76": {
    "number": 76,
    "section": 6,
    "question": "What is required in the seventh commandment?",
    "answer": [
      {
        "text": "The seventh commandment requires the preservation of our own and our neighbor's purity in heart, speech, and behavior.",
        "references": [
          {
            "citation": "1 Corinthians 7:2-3",
            "text": ``
          },
          {
            "citation": "1 Corinthians 7:5",
            "text": ``
          },
          {
            "citation": "1 Corinthians 7:34",
            "text": ``
          },
          {
            "citation": "1 Corinthians 7:36",
            "text": ``
          },
          {
            "citation": "Colossians 4:6",
            "text": ``
          },
          {
            "citation": "1 Peter 3:2",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Ten Commandments, The"
    ],
    "originalQuestion": "What is required in the seventh commandment?",
    "originalAnswer": "The seventh commandment requireth the preservation of our own and our neighbour's chastity, in heart, speech, and behavior.",
    "video": mp4[42],
    "song": mp3[42],
    "color": coloring[76],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "77": {
    "number": 77,
    "section": 6,
    "question": "What is forbidden in the seventh commandment?",
    "answer": [
      {
        "text": "The seventh commandment forbids all impure thoughts, words, and actions.",
        "references": [
          {
            "citation": "Matthew 15:19",
            "text": ``
          },
          {
            "citation": "Matthew 5:28",
            "text": ``
          },
          {
            "citation": "Ephesians 5:3-4",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Ten Commandments, The"
    ],
    "originalQuestion": "What is forbidden in the seventh commandment?",
    "originalAnswer": "The seventh commandment forbiddeth all unchaste thoughts, words, and actions.",
    "video": mp4[42],
    "song": mp3[42],
    "color": coloring[77],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "78": {
    "number": 78,
    "section": 6,
    "question": "What is the eighth commandment?",
    "answer": [
      {
        "text": "The eighth commandment is: \"You shall not steal.\"",
        "references": [
          {
            "citation": "Exodus 20:15",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Ten Commandments, The"
    ],
    "originalQuestion": "Which is the eighth commandment?",
    "originalAnswer": "The eighth commandment is, Thou shalt not steal.",
    "video": mp4[43],
    "song": mp3[43],
    "color": coloring[78],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "79": {
    "number": 79,
    "section": 6,
    "question": "What is required in the eighth commandment?",
    "answer": [
      {
        "text": "The eighth commandment requires the lawful procuring and furthering of the wealth and well-being of ourselves and others.",
        "references": [
          {
            "citation": "Genesis 30:30",
            "text": ``
          },
          {
            "citation": "1 Timothy 5:8",
            "text": ``
          },
          {
            "citation": "Leviticus 25:35",
            "text": ``
          },
          {
            "citation": "Deuteronomy 22:1-5",
            "text": ``
          },
          {
            "citation": "Exodus 23:4-5",
            "text": ``
          },
          {
            "citation": "Genesis 47:14",
            "text": ``
          },
          {
            "citation": "Genesis 47:20",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Ten Commandments, The"
    ],
    "originalQuestion": "What is required in the eighth commandment?",
    "originalAnswer": "The eighth commandment requireth the lawful procuring and furthering the wealth and outward estate of ourselves and others.",
    "video": mp4[43],
    "song": mp3[43],
    "color": coloring[79],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "80": {
    "number": 80,
    "section": 6,
    "question": "What is forbidden in the eighth commandment?",
    "answer": [
      {
        "text": "The eighth commandment forbids whatsoever does or might unjustly hinder our own",
        "references": [
          {
            "citation": "1 Timothy 5:8; Proverbs 28:19",
            "text": ``
          }
        ]
      },
      {
        "text": " or our neighbor's wealth or well-being.",
        "references": [
          {
            "citation": "Proverbs 21:17, 23:20-21; Ephesians 4:28",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Ten Commandments, The"
    ],
    "originalQuestion": "What is forbidden in the eighth commandment?",
    "originalAnswer": "The eighth commandment forbiddeth whatsoever doth or may unjustly hinder our own 1 or our neighbour's wealth or outward estate. 2",
    "video": mp4[43],
    "song": mp3[43],
    "color": coloring[80],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "81": {
    "number": 81,
    "section": 6,
    "question": "What is the ninth commandment?",
    "answer": [
      {
        "text": "The ninth commandment is, \"You shall not bear false witness against your neighbor.\"",
        "references": [
          {
            "citation": "Exodus 20:16",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Ten Commandments, The"
    ],
    "originalQuestion": "Which is the ninth commandment?",
    "originalAnswer": "The ninth commandment is, Thou shalt not bear false witness against thy neighbour.",
    "video": mp4[44],
    "song": mp3[44],
    "color": coloring[81],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "82": {
    "number": 82,
    "section": 6,
    "question": "What is required in the ninth commandment?",
    "answer": [
      {
        "text": "The ninth commandment requires the maintaining and promoting of truth among men,",
        "references": [
          {
            "citation": "Zechariah 8:16",
            "text": ``
          }
        ]
      },
      {
        "text": " and of our own and our neighbor's reputation\u2014",
        "references": [
          {
            "citation": "John 5:12",
            "text": ``
          }
        ]
      },
      {
        "text": "especially when bearing witness.",
        "references": [
          {
            "citation": "Proverbs 14:5",
            "text": ``
          },
          {
            "citation": "Proverbs 14:25",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Ten Commandments, The"
    ],
    "originalQuestion": "What is required in the ninth commandment?",
    "originalAnswer": "The ninth commandment requireth the maintaining and promoting of truth between man and man, 1 and of our own and our neighbour's good name, 2 especially in witness bearing. 3",
    "video": mp4[44],
    "song": mp3[44],
    "color": coloring[82],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "83": {
    "number": 83,
    "section": 6,
    "question": "What is forbidden in the ninth commandment?",
    "answer": [
      {
        "text": "The ninth commandment forbids whatsoever harms the truth or damages our own or our neighbor's reputation.",
        "references": [
          {
            "citation": "1 Samuel 17:28",
            "text": ``
          },
          {
            "citation": "Leviticus 19:16",
            "text": ``
          },
          {
            "citation": "Psalm 15:2-3",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Ten Commandments, The"
    ],
    "originalQuestion": "What is forbidden in the ninth commandment?",
    "originalAnswer": "The ninth commandment forbiddeth whatsoever is prejudicial to the truth, or injurious to our own or our neighbour's good name.",
    "video": mp4[44],
    "song": mp3[44],
    "color": coloring[83],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "84": {
    "number": 84,
    "section": 6,
    "question": "What is the tenth commandment?",
    "answer": [
      {
        "text": "The tenth commandment is, \"You shall not covet your neighbor's house. You shall not covet your neighbor's wife, or his manservant or maidservant, or his ox or donkey, or anything that belongs to your neighbor.\"",
        "references": [
          {
            "citation": "Exodus 20:17",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Ten Commandments, The"
    ],
    "originalQuestion": "What is the tenth commandment?",
    "originalAnswer": "The tenth commandment is Thou shalt not covet thy neighbour's house, thou shalt not covet thy neighbour's wife, nor his man-servant, nor his maid-servant, nor his ox, nor his ass, nor anything that is thy neighbour's.",
    "video": mp4[45],
    "song": mp3[45],
    "color": coloring[84],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "85": {
    "number": 85,
    "section": 6,
    "question": "What is required in the tenth commandment?",
    "answer": [
      {
        "text": "The tenth commandment requires full contentment with our own condition,",
        "references": [
          {
            "citation": "Hebrews 13:5",
            "text": ``
          },
          {
            "citation": "1 Timothy 6:6",
            "text": ``
          }
        ]
      },
      {
        "text": " having a right and charitable attitude toward our neighbor and all that is his.",
        "references": [
          {
            "citation": "Job 31:29",
            "text": ``
          },
          {
            "citation": "Romans 7:15",
            "text": ``
          },
          {
            "citation": "1 Timothy 1:5",
            "text": ``
          },
          {
            "citation": "1 Corinthians 8:4",
            "text": ``
          },
          {
            "citation": "1 Corinthians 8:7",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Ten Commandments, The"
    ],
    "originalQuestion": "What is required in the tenth commandment?",
    "originalAnswer": "The tenth commandment requireth full contentment with our own condition, 1 with a right and charitable frame of spirit toward our neighbour, and all that is his. 2",
    "video": mp4[46],
    "song": mp3[46],
    "color": coloring[85],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "86": {
    "number": 86,
    "section": 6,
    "question": "What is forbidden in the tenth commandment?",
    "answer": [
      {
        "text": "The tenth commandment forbids all discontentment with our own estate,",
        "references": [
          {
            "citation": "1 Kings 21:4",
            "text": ``
          },
          {
            "citation": "Esther 5:13",
            "text": ``
          },
          {
            "citation": "1 Corinthians 10:10",
            "text": ``
          }
        ]
      },
      {
        "text": " envying or grieving at the good of our neighbor,",
        "references": [
          {
            "citation": "Galatians 5:26",
            "text": ``
          },
          {
            "citation": "James 3:14",
            "text": ``
          },
          {
            "citation": "James 3:16",
            "text": ``
          }
        ]
      },
      {
        "text": " and any undue desires or affections toward anything that is his.",
        "references": [
          {
            "citation": "Romans 7:7-8",
            "text": ``
          },
          {
            "citation": "Romans 13:9",
            "text": ``
          },
          {
            "citation": "Deuteronomy 5:21",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Ten Commandments, The"
    ],
    "originalQuestion": "What is forbidden in the tenth commandment?",
    "originalAnswer": "The tenth commandment forbiddeth all discontentment with our own estate, 1 envying or grieving at the good of our neighbour, 2 and all inordinate motions and affections to anything that is his. 3",
    "video": mp4[46],
    "song": mp3[46],
    "color": coloring[86],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "87": {
    "number": 87,
    "section": 6,
    "question": "Is anyone perfectly able to keep the commandments of God?",
    "answer": [
      {
        "text": "Since the fall, no mere human is able in this life to perfectly keep the commandments of God,",
        "references": [
          {
            "citation": "Ecclesiastes 7:20",
            "text": ``
          },
          {
            "citation": "1 John 1:8",
            "text": ``
          },
          {
            "citation": "1 John 1:10",
            "text": ``
          },
          {
            "citation": "Galatians 5:17",
            "text": ``
          }
        ]
      },
      {
        "text": " but daily breaks them in thought, word, or deed.",
        "references": [
          {
            "citation": "Genesis 6:5",
            "text": ``
          },
          {
            "citation": "Genesis 8:21",
            "text": ``
          },
          {
            "citation": "Romans 3:9-21",
            "text": ``
          },
          {
            "citation": "James 3:2-13",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Obedience",
      "Sin",
      "Law, The"
    ],
    "originalQuestion": "Is any man able perfectly to keep the commandments of God?",
    "originalAnswer": "No mere man since the fall is able in this life perfectly to keep the commandments of God, but doth daily break them in thought, word, or deed.",
    "video": mp4[47],
    "song": mp3[47],
    "color": coloring[87],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "88": {
    "number": 88,
    "section": 7,
    "question": "Are all transgressions of the law equally wicked?",
    "answer": [
      {
        "text": "Some sins, in themselves and by reason of their consequences, are more wicked in the sight of God than others.",
        "references": [
          {
            "citation": "Ezekiel 8:6",
            "text": ``
          },
          {
            "citation": "Ezekiel 8:13",
            "text": ``
          },
          {
            "citation": "Ezekiel 8:15",
            "text": ``
          },
          {
            "citation": "1 John 5:16",
            "text": ``
          },
          {
            "citation": "Psalm 78:17",
            "text": ``
          },
          {
            "citation": "Psalm 78:32",
            "text": ``
          },
          {
            "citation": "Psalm 78:56",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Sin",
      "Law, The"
    ],
    "originalQuestion": "Are all transgressions of the law equally heinous?",
    "originalAnswer": "Some sins in themselves, and by reason of several aggravations, are more heinous in the sight of God than others.",
    "video": mp4[48],
    "song": mp3[48],
    "color": coloring[88],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "89": {
    "number": 89,
    "section": 7,
    "question": "What does every sin deserve?",
    "answer": [
      {
        "text": "Every sin deserves God's wrath and curse both in this life and that which is to come.",
        "references": [
          {
            "citation": "Ephesians 5:6",
            "text": ``
          },
          {
            "citation": "Galatians 3:10",
            "text": ``
          },
          {
            "citation": "Lamentations 3:39",
            "text": ``
          },
          {
            "citation": "Matthew 25:41",
            "text": ``
          },
          {
            "citation": "Romans 6:23",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Sin",
      "Curse, The",
      "Law, The"
    ],
    "originalQuestion": "What doth every sin deserve?",
    "originalAnswer": "Every sin deserveth God's wrath and curse, both in this life and that which is to come.",
    "video": mp4[48],
    "song": mp3[48],
    "color": coloring[89],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "90": {
    "number": 90,
    "section": 7,
    "question": "What does God require of us that we may escape His wrath and curse due to us for sin?",
    "answer": [
      {
        "text": "To escape the wrath and curse of God due to us for sin, He requires of us faith in Jesus Christ and repentance unto life,",
        "references": [
          {
            "citation": "Acts 20:21",
            "text": ``
          }
        ]
      },
      {
        "text": " with the diligent use of all the outward means by which Christ communicates to us the benefits of redemption.",
        "references": [
          {
            "citation": "Proverbs 2:1-6",
            "text": ``
          },
          {
            "citation": "Proverbs 8:33-36",
            "text": ``
          },
          {
            "citation": "Isaiah 55:2-3",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Faith",
      "Sin"
    ],
    "originalQuestion": "What doth God require of us that we may escape his wrath and curse, due to us for sin?",
    "originalAnswer": "To escape the wrath and curse of God due to us for sin, God requireth of us faith in Jesus Christ, repentance unto life, with the diligent use of all the outward means whereby Christ communicateth to us the benefits of redemption.",
    "video": mp4[49],
    "song": mp3[49],
    "color": coloring[90],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "91": {
    "number": 91,
    "section": 7,
    "question": "What is faith in Jesus Christ?",
    "answer": [
      {
        "text": "Faith in Jesus Christ is a saving grace",
        "references": [
          {
            "citation": "Hebrews 10:39",
            "text": ``
          }
        ]
      },
      {
        "text": " by which we receive and rest upon Him alone for salvation, as He is offered to us in the gospel.",
        "references": [
          {
            "citation": "John 1:12",
            "text": ``
          },
          {
            "citation": "Isaiah 26:3-4",
            "text": ``
          },
          {
            "citation": "Philippians 3:9",
            "text": ``
          },
          {
            "citation": "Galatians 2:16",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Faith",
      "Salvation"
    ],
    "originalQuestion": "What is faith in Jesus Christ?",
    "originalAnswer": "Faith in Jesus Christ is a saving grace, whereby we receive and rest upon him alone for salvation, as he is offered to us in the gospel.",
    "video": mp4[50],
    "song": mp3[50],
    "color": coloring[91],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "92": {
    "number": 92,
    "section": 7,
    "question": "What is repentance unto life?",
    "answer": [
      {
        "text": "Repentance unto life is a saving grace",
        "references": [
          {
            "citation": "Acts 11:28",
            "text": ``
          }
        ]
      },
      {
        "text": " by which a sinner, out of a true sense of his sin",
        "references": [
          {
            "citation": "Acts 2:37-38",
            "text": ``
          }
        ]
      },
      {
        "text": " and understanding of the mercy of God in Christ,",
        "references": [
          {
            "citation": "Joel 2:12",
            "text": ``
          },
          {
            "citation": "Jeremiah 3:22",
            "text": ``
          }
        ]
      },
      {
        "text": " does, with grief and hatred of his sin, turn from it unto God",
        "references": [
          {
            "citation": "Jeremiah 31:18-19",
            "text": ``
          },
          {
            "citation": "Ezekiel 36:31",
            "text": ``
          }
        ]
      },
      {
        "text": " with complete commitment to pursue new obedience.",
        "references": [
          {
            "citation": "2 Corinthians 7:11",
            "text": ``
          },
          {
            "citation": "Isaiah 1:16-17",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Salvation",
      "Sin",
      "Obedience"
    ],
    "originalQuestion": "What is repentance unto life?",
    "originalAnswer": "Repentance unto life is a saving grace, whereby a sinner, out of a true sense of his sin, and apprehension of the mercy of God in Christ, doth, with grief and hatred of his sin, turn from it unto God, with full purpose of and endeavour after new obedience.",
    "video": mp4[50],
    "song": mp3[50],
    "color": coloring[92],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "93": {
    "number": 93,
    "section": 8,
    "question": "What are the outward means by which Christ communicates to us the benefits of redemption?",
    "answer": [
      {
        "text": "The outward and ordinary means by which Christ communicates to us the benefits of redemption are his ordinances, especially the Word, baptism, the Lord's Supper, and prayer\u2014all of which are made effectual to the elect for salvation.",
        "references": [
          {
            "citation": "Matthew 28:19-20",
            "text": ``
          },
          {
            "citation": "Acts 2:42",
            "text": ``
          },
          {
            "citation": "Acts 2:46-47",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Redemption",
      "Ordinances",
      "Salvation"
    ],
    "originalQuestion": "What are the outward means whereby Christ communicateth to us the benefits of redemption?",
    "originalAnswer": "The outward and ordinary means whereby Christ communicateth to us the benefits of redemption are his ordinances, especially the word, baptism, the Lord's supper, and prayer; all which means are made effectual to the elect for salvation.",
    "video": mp4[51],
    "song": mp3[51],
    "color": coloring[93],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "94": {
    "number": 94,
    "section": 8,
    "question": "How is the Word made effectual unto salvation?",
    "answer": [
      {
        "text": "The Holy Spirit makes the reading, but especially the preaching, of the Word an effectual means of convincing and converting sinners, and of building them up in holiness and comfort through faith unto salvation.",
        "references": [
          {
            "citation": "Nehemiah 8:8",
            "text": ``
          },
          {
            "citation": "Acts 26:18",
            "text": ``
          },
          {
            "citation": "Psalm 19:8",
            "text": ``
          },
          {
            "citation": "Acts 20:32",
            "text": ``
          },
          {
            "citation": "Romans 1:15-16",
            "text": ``
          },
          {
            "citation": "Romans 10:13-17",
            "text": ``
          },
          {
            "citation": "Romans 15:4",
            "text": ``
          },
          {
            "citation": "1 Corinthians 14:24-25",
            "text": ``
          },
          {
            "citation": "2 Timothy 3:15-17",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Bible",
      "Salvation",
      "Holiness"
    ],
    "originalQuestion": "How is the word made effectual to salvation?",
    "originalAnswer": "The Spirit of God maketh the reading, but especially the preaching of the word, an effectual means of convincing and converting sinners, and of building them up in holiness and comfort through faith unto salvation.",
    "video": mp4[52],
    "song": mp3[52],
    "color": coloring[94],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "95": {
    "number": 95,
    "section": 8,
    "question": "How is the Word to be read and heard so that it may become effectual unto salvation?",
    "answer": [
      {
        "text": "That the Word may become effectual unto salvation, we must: approach it with diligence,",
        "references": [
          {
            "citation": "Proverbs 8:34",
            "text": ``
          }
        ]
      },
      {
        "text": " preparation,",
        "references": [
          {
            "citation": "1 Peter 2:1-2",
            "text": ``
          }
        ]
      },
      {
        "text": " and prayer;",
        "references": [
          {
            "citation": "Psalm 119:18",
            "text": ``
          }
        ]
      },
      {
        "text": " receive it with faith and love;",
        "references": [
          {
            "citation": "Hebrews 4:2",
            "text": ``
          },
          {
            "citation": "2 Thessalonians 2:10",
            "text": ``
          }
        ]
      },
      {
        "text": " store it in our hearts;",
        "references": [
          {
            "citation": "Psalm 119:18",
            "text": ``
          }
        ]
      },
      {
        "text": " and practice it in our lives.",
        "references": [
          {
            "citation": "Luke 8:15; James 1:25",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Bible",
      "Salvation",
      "Prayer",
      "Faith",
      "Worship"
    ],
    "originalQuestion": "How is the word to be read and heard, that it may become effectual to salvation?",
    "originalAnswer": "That the word may become effectual to salvation, we must attend thereunto with diligence, preparation, and prayer; receive it with faith and love, lay it up in our hearts, and practice it in our lives.",
    "video": mp4[53],
    "song": mp3[53],
    "color": coloring[95],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "96": {
    "number": 96,
    "section": 8,
    "question": "How do baptism and the Lord's Supper become effectual means of salvation?",
    "answer": [
      {
        "text": "Baptism and the Lord's Supper become effectual means of salvation not from any virtue in them or in him who administers them, but only by the blessing of Christ",
        "references": [
          {
            "citation": "1 Peter 3:21",
            "text": ``
          },
          {
            "citation": "Matthew 3:11",
            "text": ``
          },
          {
            "citation": "1 Corinthians 3:6-7",
            "text": ``
          }
        ]
      },
      {
        "text": " and the working of the Holy Spirit in those who by faith receive them.",
        "references": [
          {
            "citation": "1 Corinthians 12:3; Matthew 28:19",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Ordinances",
      "Salvation",
      "Worship"
    ],
    "originalQuestion": "How do baptism and the Lord's supper become effectual means of salvation?",
    "originalAnswer": "Baptism and the Lord's supper become effectual means of salvation, not for any virtue in them, or in him that doth administer them, but only by the blessing of Christ, and the working of the Spirit in those that by faith receive them.",
    "video": mp4[54],
    "song": mp3[54],
    "color": coloring[96],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "97": {
    "number": 97,
    "section": 8,
    "question": "What is baptism?",
    "answer": [
      {
        "text": "Baptism is an ordinance of the New Testament instituted by Jesus Christ to be unto the person baptized: a sign of his fellowship with Christ in His death, burial, and resurrection; of his being ingrafted into Christ;",
        "references": [
          {
            "citation": "Romans 6:3-5",
            "text": ``
          },
          {
            "citation": "Colossians 2:12",
            "text": ``
          },
          {
            "citation": "Galatians 3:27",
            "text": ``
          }
        ]
      },
      {
        "text": " of remission of sins;",
        "references": [
          {
            "citation": "Mark 1:4",
            "text": ``
          },
          {
            "citation": "Acts 2:38",
            "text": ``
          },
          {
            "citation": "Acts 22:16",
            "text": ``
          }
        ]
      },
      {
        "text": " and of his giving up himself unto God through Jesus Christ to live and walk in newness of life.",
        "references": [
          {
            "citation": "Romans 6:3-4",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Ordinances"
    ],
    "originalQuestion": "What is baptism?",
    "originalAnswer": "Baptism is an ordinance of the New Testament instituted by Jesus Christ, to be unto the party baptized a sign of his fellowship with him, in his death, burial, and resurrection; of his being ingrafted into him; of remission of sins; and of his giving up himself unto God through Jesus Christ, to live and walk in newness of life.",
    "video": mp4[55],
    "song": mp3[55],
    "color": coloring[97],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "98": {
    "number": 98,
    "section": 8,
    "question": "To whom is baptism to be administered?",
    "answer": [
      {
        "text": "Baptism is to be administered to all those who actually profess repentance toward God",
        "references": [
          {
            "citation": "Acts 2:38",
            "text": ``
          },
          {
            "citation": "Matthew 3:6",
            "text": ``
          }
        ]
      },
      {
        "text": " and faith in, with obedience to, our Lord Jesus Christ and to none other.",
        "references": [
          {
            "citation": "Acts 8:12",
            "text": ``
          },
          {
            "citation": "Acts 8:36-38",
            "text": ``
          },
          {
            "citation": "Acts 10:47-48",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Ordinances",
      "Faith"
    ],
    "originalQuestion": "To whom is baptism to be administered?",
    "originalAnswer": "Baptism is to be administered to all those who actually profess repentance towards God, faith in and obedience to our Lord Jesus Christ, and to none other.",
    "video": mp4[56],
    "song": mp3[56],
    "color": coloring[98],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "99": {
    "number": 99,
    "section": 8,
    "question": "Are the infants of professing believers to be baptized?",
    "answer": [
      {
        "text": "The infants of such as are professing believers are not to be baptized because there is neither command nor example in the Holy Scriptures, nor certain consequence from them, to baptize such.",
        "references": [
          {
            "citation": "Proverbs 30:6",
            "text": ``
          },
          {
            "citation": "Luke 3:7-8",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Ordinances"
    ],
    "originalQuestion": "Are the infants of such as are professing believers to be baptized?",
    "originalAnswer": "The infants of such as are professing believers are not to be baptized, because there is neither command or example in the holy scriptures, or certain consequence from them to baptize such.",
    "video": mp4[56],
    "song": mp3[56],
    "color": coloring[99],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "100": {
    "number": 100,
    "section": 8,
    "question": "How is Baptism rightly administered?",
    "answer": [
      {
        "text": "Baptism is rightly administered by immersion, or dipping the whole body of the person in water, in the name of the Father, the Son, and the Holy Spirit, according to Christ's institution and the practice of the apostles. It is not to be by sprinkling, pouring of water, or dipping some part of the body after the tradition of men.",
        "references": [
          {
            "citation": "Matthew 3:16",
            "text": ``
          },
          {
            "citation": "John 3:23",
            "text": ``
          },
          {
            "citation": "4:1-2",
            "text": ``
          },
          {
            "citation": "Matthew 28:19-20",
            "text": ``
          },
          {
            "citation": "Acts 8:38",
            "text": ``
          },
          {
            "citation": "Romans 6:4",
            "text": ``
          },
          {
            "citation": "Colossians 2:12",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Ordinances"
    ],
    "originalQuestion": "How is Baptism rightly administered?",
    "originalAnswer": "Baptism is rightly administered by immersion, or dipping the whole body of the party in water, into the name of the Father, and of the Son, and of the Holy Spirit, according to Christ's institution, and the practice of the apostles, and not by sprinkling or pouring of water, or dipping some part of the body, after the tradition of men.",
    "video": mp4[57],
    "song": mp3[57],
    "color": coloring[100],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "101": {
    "number": 101,
    "section": 8,
    "question": "What is the duty of such who are rightly baptized?",
    "answer": [
      {
        "text": "It is the duty of such who are rightly baptized to give up themselves to a local, orderly church of Jesus Christ, that they may walk in all the commandments and ordinances of the Lord blameless.",
        "references": [
          {
            "citation": "Acts 2:41-42",
            "text": ``
          },
          {
            "citation": "Acts 5:13-14",
            "text": ``
          },
          {
            "citation": "Acts 9:26",
            "text": ``
          },
          {
            "citation": "1 Peter 2:5",
            "text": ``
          },
          {
            "citation": "Luke 1:6",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Church, The",
      "Ordinances",
      "Obedience"
    ],
    "originalQuestion": "What is the duty of such who are rightly baptized?",
    "originalAnswer": "It is the duty of such who are rightly baptized to give up themselves to some particular and orderly church of Jesus Christ, that they may walk in all the commandments and ordinances of the Lord blameless.",
    "video": mp4[58],
    "song": mp3[58],
    "color": coloring[101],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "102": {
    "number": 102,
    "section": 8,
    "question": "What is the Lord's Supper?",
    "answer": [
      {
        "text": "The Lord's Supper is an ordinance of the New Testament instituted by Jesus Christ, by which in giving and receiving bread and wine according to his appointment, Christ's death is shown forth. The worthy receivers are, not in a physical or carnal manner, but by faith, made partakers of His body and blood, with all His benefits, to their spiritual nourishment and growth in grace.",
        "references": [
          {
            "citation": "Matthew 26:26-28",
            "text": ``
          },
          {
            "citation": "1 Corinthians 11:23-26",
            "text": ``
          },
          {
            "citation": "1 Corinthians 10:16",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Ordinances"
    ],
    "originalQuestion": "What is the Lord's supper?",
    "originalAnswer": "The Lord's supper is an ordinance of the New Testament, instituted by Jesus Christ; wherein by giving and receiving bread and wine, according to his appointment, his death is shown forth, and the worthy receivers are, not after a corporal and carnal manner, but by faith, made partakers of his body and blood, with all his benefits, to their spiritual nourishment and growth in grace.",
    "video": mp4[59],
    "song": mp3[59],
    "color": coloring[102],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "103": {
    "number": 103,
    "section": 8,
    "question": "Who are the proper partakers of the Lord's Supper?",
    "answer": [
      {
        "text": "They who have been baptized upon a personal profession of their faith in Jesus Christ and repentance from dead works.",
        "references": [
          {
            "citation": "Acts 2:41-42",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Ordinances"
    ],
    "originalQuestion": "Who are the proper subjects of this ordinance?",
    "originalAnswer": "They who have been baptized upon a personal profession of their faith in Jesus Christ, and repentance from dead works.",
    "video": mp4[60],
    "song": mp3[60],
    "color": coloring[103],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "104": {
    "number": 104,
    "section": 8,
    "question": "What is required for the worthy receiving of the Lord's Supper?",
    "answer": [
      {
        "text": "It is required of them who would worthily partake of the Lord's Supper to examine themselves: of their knowledge to discern the Lord's body;",
        "references": [
          {
            "citation": "1 Corinthians 11:28-29",
            "text": ``
          }
        ]
      },
      {
        "text": " of their faith to feed upon Him;",
        "references": [
          {
            "citation": "2 Corinthians 13:5",
            "text": ``
          }
        ]
      },
      {
        "text": " and of their repentance,",
        "references": [
          {
            "citation": "1 Corinthians 11:31",
            "text": ``
          }
        ]
      },
      {
        "text": " love,",
        "references": [
          {
            "citation": "1 Corinthians 10:16-17",
            "text": ``
          }
        ]
      },
      {
        "text": " and new obedience\u2014",
        "references": [
          {
            "citation": "1 Corinthians 5:7-8",
            "text": ``
          }
        ]
      },
      {
        "text": " lest coming unworthily they eat and drink judgment upon themselves.",
        "references": [
          {
            "citation": "1 Corinthians 11:28-29",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Ordinances",
      "Sanctification",
      "Judgment"
    ],
    "originalQuestion": "What is required to the worthy receiving of the Lord's supper?",
    "originalAnswer": "It is required of them that would worthily partake of the Lord's supper, that they examine themselves of their knowledge to discern the Lord's body, of their faith to feed upon him, of their repentance, love, and new obedience, lest coming unworthily they eat and drink judgment to themselves.",
    "video": mp4[60],
    "song": mp3[60],
    "color": coloring[104],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "105": {
    "number": 105,
    "section": 8,
    "question": "What is prayer?",
    "answer": [
      {
        "text": "Prayer is the act of offering up our desires to God,",
        "references": [
          {
            "citation": "Psalm 62:8",
            "text": ``
          }
        ]
      },
      {
        "text": " by the assistance of the Holy Spirit,",
        "references": [
          {
            "citation": "Romans 8:26",
            "text": ``
          }
        ]
      },
      {
        "text": " for things acceptable to His will;",
        "references": [
          {
            "citation": "1 John 5:14",
            "text": ``
          },
          {
            "citation": "Romans 8:27",
            "text": ``
          }
        ]
      },
      {
        "text": " in the name of Christ,",
        "references": [
          {
            "citation": "John 16:23",
            "text": ``
          }
        ]
      },
      {
        "text": " believing,",
        "references": [
          {
            "citation": "Matthew 21:22",
            "text": ``
          },
          {
            "citation": "James 1:6",
            "text": ``
          }
        ]
      },
      {
        "text": " with confession of our sins,",
        "references": [
          {
            "citation": "Psalm 32:5-6",
            "text": ``
          },
          {
            "citation": "Daniel 9:4",
            "text": ``
          }
        ]
      },
      {
        "text": " and thankful acknowledgments of His mercies.",
        "references": [
          {
            "citation": "Philippians 4:6",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Prayer"
    ],
    "originalQuestion": "What is prayer?",
    "originalAnswer": "Prayer is an offering up our desires to God, by the assistance of the Holy Spirit, for things agreeable to his will, in the name of Christ, believing, with confession of our sins, and thankful acknowledgments of his mercies.",
    "video": mp4[61],
    "song": mp3[61],
    "color": coloring[105],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "106": {
    "number": 106,
    "section": 9,
    "question": "What guide has God given for our direction in prayer?",
    "answer": [
      {
        "text": "The whole Word of God is of use to direct us in prayer,",
        "references": [
          {
            "citation": "1 John 5:14",
            "text": ``
          }
        ]
      },
      {
        "text": " but the special guide for direction is the prayer Christ taught His disciples commonly known as the Lord's Prayer.",
        "references": [
          {
            "citation": "Matthew 6:9-13",
            "text": ``
          },
          {
            "citation": "Luke 11:2-4",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Lord's Prayer, The",
      "Prayer"
    ],
    "originalQuestion": "What rule hath God given for our direction in prayer?",
    "originalAnswer": "The whole word of God is of use to direct us in prayer; but the special rule of direction is that prayer which Christ taught his disciples, commonly called the Lord's prayer.",
    "video": mp4[62],
    "song": mp3[62],
    "color": coloring[106],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "107": {
    "number": 107,
    "section": 9,
    "question": "What does the preface of the Lord's Prayer teach us?",
    "answer": [
      {
        "text": "The preface of the Lord's Prayer, \"Our Father in heaven,\"",
        "references": [
          {
            "citation": "Matthew 6:9",
            "text": ``
          }
        ]
      },
      {
        "text": "teaches us to draw near to God with all holy reverence and confidence, as children to a father who is able and ready to help us;",
        "references": [
          {
            "citation": "Romans 8:15",
            "text": ``
          },
          {
            "citation": "Luke 11:13",
            "text": ``
          },
          {
            "citation": "Isaiah 24:8",
            "text": ``
          }
        ]
      },
      {
        "text": " and that we should pray with and for others.",
        "references": [
          {
            "citation": "Acts 12:5",
            "text": ``
          },
          {
            "citation": "1 Timothy 2:1-2",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Lord's Prayer, The",
      "Prayer",
      "Church, The"
    ],
    "originalQuestion": "What doth the preface of the Lord's prayer teach us?",
    "originalAnswer": "The preface of the Lord's prayer, which is Our Father which art in heaven, teacheth us to draw near to God with all holy reverence and confidence, as children to a father, able and ready to help us; and that we should pray with and for others.",
    "video": mp4[63],
    "song": mp3[63],
    "color": coloring[107],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "108": {
    "number": 108,
    "section": 9,
    "question": "For what do we pray in the first petition?",
    "answer": [
      {
        "text": "In the first petition, \"hallowed be Your name,\"",
        "references": [
          {
            "citation": "Matthew 6:9",
            "text": ``
          }
        ]
      },
      {
        "text": " we pray that God would enable us and others to glorify Him in all by which He makes Himself known,",
        "references": [
          {
            "citation": "Psalm 67:2-3",
            "text": ``
          }
        ]
      },
      {
        "text": " and that He would arrange all things for His own glory.",
        "references": [
          {
            "citation": "Psalm 83:1-18",
            "text": ``
          },
          {
            "citation": "Romans 11:36",
            "text": ``
          }
        ]
      }
    ],
    "topics": [
      "Lord's Prayer, The",
      "Sovereignty"
    ],
    "originalQuestion": "What do we pray for in the first petition?",
    "originalAnswer": "In the first petition, which is, Hallowed be thy name, we pray that God would enable us and others to glorify him in all that whereby he maketh himself known, and that he would dispose all things to his own glory.",
    "video": mp4[64],
    "song": mp3[64],
    "color": coloring[108],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "109": {
    "number": 109,
    "section": 9,
    "question": "For what do we pray in the second petition?",
    "answer": [
      {
        "text": "In the second petition, \"Your kingdom come,\"",
        "references": [
          {
            "citation": "Matthew 6:10",
            "text": ``
          }
        ]
      },
      {
        "text": " we pray: that Satan's kingdom may be destroyed,",
        "references": [
          {
            "citation": "Psalm 68:1",
            "text": ``
          },
          {
            "citation": "Psalm 68:18",
            "text": ``
          }
        ]
      },
      {
        "text": " that the kingdom of grace may advance;",
        "references": [
          {
            "citation": "Revelation 12:10-11",
            "text": ``
          }
        ]
      },
      {
        "text": " that ourselves and others are brought into and kept in it;",
        "references": [
          {
            "citation": "2 Thessalonians 3:1",
            "text": ``
          },
          {
            "citation": "Romans 10:1",
            "text": ``
          },
          {
            "citation": "John 17:19-20",
            "text": ``
          }
        ]
      },
      {
        "text": " and that the kingdom of glory may come quickly.",
        "references": [
          {
            "citation": "Revelation 22:10",
            "text": `<num data-verse="4"></num>`
          }
        ]
      }
    ],
    "topics": [
      "Lord's Prayer, The",
      "Sovereignty"
    ],
    "originalQuestion": "What do we pray for in the second petition?",
    "originalAnswer": "In the second petition, which is, Thy kingdom come, we pray that Satan's kingdom may be destroyed, and that the kingdom of grace may be advanced; ourselves and others brought into it and kept in it, and that the kingdom of glory may be hastened.",
    "video": mp4[65],
    "song": mp3[65],
    "color": coloring[109],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "110": {
    "number": 110,
    "section": 9,
    "question": "For what do we pray in the third petition?",
    "answer": [
      {
        "text": "In the third petition, \"Your will be done, on earth as it is in heaven,\"",
        "references": [
          {
            "citation": "Matthew 6:10",
            "text": `<num data-verse="4"></num>`
          }
        ]
      },
      {
        "text": " we pray that God, by His grace, would make us able and willing to know, obey, and submit to His will in all things,",
        "references": [
          {
            "citation": "Psalm 67:1-6",
            "text": `<num data-verse="4"></num>`
          },
          {
            "citation": "Psalm 119:36",
            "text": `<num data-verse="4"></num>`
          },
          {
            "citation": "2 Samuel 15:25",
            "text": `<num data-verse="4"></num>`
          },
          {
            "citation": "Job 1:21",
            "text": `<num data-verse="4"></num>`
          }
        ]
      },
      {
        "text": " just as the angels do in heaven.",
        "references": [
          {
            "citation": "Psalm 103:20-21",
            "text": `<num data-verse="4"></num>`
          }
        ]
      }
    ],
    "topics": [
      "Lord's Prayer, The",
      "Obedience"
    ],
    "originalQuestion": "What do we pray for in the third petition?",
    "originalAnswer": "In the third petition, which is, Thy will be done on earth as it is in heaven we pray that God by his grace would make us able and willing to know, obey, and submit to his will in all things, as the angels do in heaven.",
    "video": mp4[66],
    "song": mp3[66],
    "color": coloring[110],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "111": {
    "number": 111,
    "section": 9,
    "question": "For what do we pray in the fourth petition?",
    "answer": [
      {
        "text": "In the fourth petition, \"Give us this day our daily bread,\"",
        "references": [
          {
            "citation": "Matthew 6:11",
            "text": `<num data-verse="4"></num>`
          }
        ]
      },
      {
        "text": " we pray that, by God's free gift, we may receive a sufficient portion of the good things of this life, and enjoy His blessing with them.",
        "references": [
          {
            "citation": "Proverbs 30:8",
            "text": `<num data-verse="4"></num>`
          },
          {
            "citation": "Genesis 28:20",
            "text": `<num data-verse="4"></num>`
          },
          {
            "citation": "1 Timothy 4:4-5",
            "text": `<num data-verse="4"></num>`
          }
        ]
      }
    ],
    "topics": [
      "Lord's Prayer, The",
      "Providence"
    ],
    "originalQuestion": "What do we pray for in the fourth petition?",
    "originalAnswer": "In the fourth petition, which is, Give us this day our daily bread, we pray that of God's free gift we may receive a competent portion of the good things of this life, and enjoy his blessing with them.",
    "video": mp4[67],
    "song": mp3[67],
    "color": coloring[111],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "112": {
    "number": 112,
    "section": 9,
    "question": "For what do we pray in the fifth petition?",
    "answer": [
      {
        "text": "In the fifth petition, \"And forgive us our debts, as we also have forgiven our debtors,\"",
        "references": [
          {
            "citation": "Matthew 6:12",
            "text": `<num data-verse="4"></num>`
          }
        ]
      },
      {
        "text": " we pray that God, for Christ's sake, would freely pardon all our sins.",
        "references": [
          {
            "citation": "Psalm 51:1-2",
            "text": `<num data-verse="4"></num>`
          },
          {
            "citation": "Psalm 51:7",
            "text": `<num data-verse="4"></num>`
          },
          {
            "citation": "Psalm 51:9",
            "text": `<num data-verse="4"></num>`
          },
          {
            "citation": "Daniel 9:17-19",
            "text": `<num data-verse="4"></num>`
          }
        ]
      },
      {
        "text": " We are rather encouraged to ask this, because by His grace we are enabled from the heart to forgive others.",
        "references": [
          {
            "citation": "Luke 11:4",
            "text": `<num data-verse="4"></num>`
          },
          {
            "citation": "Matthew 18:35",
            "text": `<num data-verse="4"></num>`
          }
        ]
      }
    ],
    "topics": [
      "Lord's Prayer, The"
    ],
    "originalQuestion": "What do we pray for in the fifth petition?",
    "originalAnswer": "In the fifth petition, which is, And forgive us our debts as we forgive our debtors, we pray that God, for Christ's sake, would freely pardon all our sins which we are rather encouraged to ask because of his grace we are enabled from the heart to forgive others.",
    "video": mp4[68],
    "song": mp3[68],
    "color": coloring[112],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "113": {
    "number": 113,
    "section": 9,
    "question": "For what do we pray in the sixth petition?",
    "answer": [
      {
        "text": "In the sixth petition, \"And lead us not into temptation, but deliver us from the evil one,\"",
        "references": [
          {
            "citation": "Matthew 6:13",
            "text": `<num data-verse="4"></num>`
          }
        ]
      },
      {
        "text": " we pray that God would either keep us from being tempted to sin",
        "references": [
          {
            "citation": "Matthew 26:31",
            "text": `<num data-verse="4"></num>`
          }
        ]
      },
      {
        "text": " or support and deliver us when we are tempted.",
        "references": [
          {
            "citation": "2 Corinthians 12:8",
            "text": `<num data-verse="4"></num>`
          }
        ]
      }
    ],
    "topics": [
      "Lord's Prayer, The",
      "Sin"
    ],
    "originalQuestion": "What do we pray for in the sixth petition?",
    "originalAnswer": "In the sixth petition, which is, And lead us not into temptation but deliver us from evil, we pray that God would either keep us from being tempted to sin, or support and deliver us when we are tempted.",
    "video": mp4[69],
    "song": mp3[69],
    "color": coloring[113],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
  "114": {
    "number": 114,
    "section": 9,
    "question": "What does the conclusion of the Lord's prayer teach?",
    "answer": [
      {
        "text": "The conclusion of the Lord's prayer, \"For Yours is the kingdom, and the power, and the glory, forever. Amen,\"",
        "references": [
          {
            "citation": "Matthew 6:13",
            "text": `<num data-verse="4"></num>`
          }
        ]
      },
      {
        "text": " teaches us to draw our encouragement in prayer from God alone",
        "references": [
          {
            "citation": "Daniel 9:4",
            "text": `<num data-verse="4"></num>`
          },
          {
            "citation": "Daniel 9:7-9",
            "text": `<num data-verse="4"></num>`
          },
          {
            "citation": "Daniel 9:16-19",
            "text": `<num data-verse="4"></num>`
          }
        ]
      },
      {
        "text": " and in our prayers to praise Him: ascribing kingdom, power, and glory to Him.",
        "references": [
          {
            "citation": "1 Chronicles 29:10-13",
            "text": `<num data-verse="4"></num>`
          }
        ]
      },
      {
        "text": " In testimony of our desire and assurance to be heard, we say, \"Amen.\"",
        "references": [
          {
            "citation": "1 Corinthians 4:16",
            "text": `<num data-verse="4"></num>`
          },
          {
            "citation": "Revelation 22:20-21",
            "text": `<num data-verse="4"></num>`
          }
        ]
      }
    ],
    "topics": [
      "Lord's Prayer, The",
      "Sovereignty"
    ],
    "originalQuestion": "What doth the conclusion of the Lord's prayer teach?",
    "originalAnswer": "The conclusion of the Lord's prayer, which is, For Thine is the kingdom, and the power, and the glory, forever. Amen, teacheth us to take our encouragement in prayer from God only, and in our prayers to praise Him, ascribing kingdom, power, and glory, to Him. And in testimony of our desire and assurance to be heard, we say, Amen.",
    "video": mp4[70],
    "song": mp3[70],
    "color": coloring[114],
    "confession": [],
    "param1": "",
    "param2": "",
    "param3": ""
  },
};