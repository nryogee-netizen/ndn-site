import os, json
os.chdir(os.path.dirname(__file__))
files = sorted([f for f in os.listdir('.') if f.startswith('pdf_image_') and f.lower().endswith(('.png','.jpeg','.jpg'))])
with open('images.json','w',encoding='utf-8') as fh:
    json.dump(files, fh, indent=2)
print('Wrote images.json with', len(files), 'entries')