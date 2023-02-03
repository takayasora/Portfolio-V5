# 参考元
# 画像フォーマット変換
# https://sciencompass.com/machine-learning/python-img-convert
# 文字列置き換え
# https://note.nkmk.me/python-str-replace-translate-re-sub/
# ファイル削除
# https://note.nkmk.me/python-os-remove-rmdir-removedirs-shutil-rmtree/

import glob
from PIL import Image
import os

import glob
from PIL import Image


def cnvt2jpg(s, i):
    im = Image.open(s).convert("RGB")
    im.save(str(format(i, "04"))+".jpg", "jpeg")


def cnvt2png(s, i):
    print(s)
    # im = Image.open(s).convert("RGB")
    # im.save(str(format(i, "04"))+".png", "png")


def cnvt2webp(s, i):
    im = Image.open(s).convert("RGB")
    im.save(str(format(i, "04"))+".webp", "webp")


files = glob.glob(".\*.jpg")
i = 0
for file in files:
    cnvt2png(file, i)
    i += 1


"""
def cnvt_png2webp(s,types):
    name=s.replace(types, '')
    im = Image.open(s).convert("RGBA")
    im.save(name+"webp", "webp")
    os.remove(s)
    
filepath=input("filepath=>")

filetype=["png","jpg","jpeg"]
for i in range(len(filetype)):
    files = glob.glob(filepath+"/*"+filetype[i])
    for file in files:
        print(file)
        cnvt_png2webp(file,filetype[i])

    files = glob.glob(filepath+"/*/*"+filetype[i])
    for file in files:
        print(file)
        cnvt_png2webp(file,filetype[i])
    
    files = glob.glob(filepath+"/*/*/*"+filetype[i])
    for file in files:
        print(file)
        cnvt_png2webp(file,filetype[i])

    files = glob.glob(filepath+"/*/*/*/*"+filetype[i])
    for file in files:
        print(file)
        cnvt_png2webp(file,filetype[i])

    files = glob.glob(filepath+"/*/*/*/*/*"+filetype[i])
    for file in files:
        print(file)
        cnvt_png2webp(file,filetype[i])
"""
