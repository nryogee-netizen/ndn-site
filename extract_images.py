import sys
import os
import subprocess

try:
    import fitz
except Exception:
    print('PyMuPDF not found. Installing...')
    subprocess.check_call([sys.executable, '-m', 'pip', 'install', 'pymupdf'])
    import fitz

pdf_path = os.path.join(os.path.dirname(__file__), 'COMPANY PROFILE NDN 2025.pdf')
out_dir = os.path.join(os.path.dirname(__file__), 'website', 'assets')

os.makedirs(out_dir, exist_ok=True)

print('Opening PDF:', pdf_path)
doc = fitz.open(pdf_path)
count = 0
for page_index in range(len(doc)):
    images = doc.get_page_images(page_index)
    print(f'Page {page_index+1} has {len(images)} image(s)')
    for img in images:
        xref = img[0]
        base_image = doc.extract_image(xref)
        image_bytes = base_image['image']
        ext = base_image['ext']
        out_path = os.path.join(out_dir, f'pdf_image_{page_index+1}_{xref}.{ext}')
        with open(out_path, 'wb') as f:
            f.write(image_bytes)
        count += 1
        print('Saved', out_path)

print('Done. Extracted', count, 'images to', out_dir)