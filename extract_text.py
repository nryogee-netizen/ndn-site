import fitz
import os

pdf_path = os.path.join(os.path.dirname(__file__), 'COMPANY PROFILE NDN 2025.pdf')
out_path = os.path.join(os.path.dirname(__file__), 'website', 'company_profile.txt')

doc = fitz.open(pdf_path)
with open(out_path, 'w', encoding='utf-8') as fh:
    for i, page in enumerate(doc):
        text = page.get_text()
        fh.write(f'--- PAGE {i+1} ---\n')
        fh.write(text + '\n\n')
print('Wrote', out_path)