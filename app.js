const medpathtests = [
  { "id": 1, "name": "1 25 Di Hydroxy Vitamin D( Vitamin D3 )", "mrp": 3000, "b2b": 1500 },
  { "id": 2, "name": "17-Hydroxy Progesterone (17-OHP)", "mrp": 1500, "b2b": 600 },
  { "id": 3, "name": "17-Ketosteroids-24hrs Urine", "mrp": 5500, "b2b": 2800 },
  { "id": 4, "name": "24 hrs Urinary Corsol/Creanine Rao", "mrp": 1500, "b2b": 900 },
  { "id": 5, "name": "24 Hrs Urine Proen / Creanine Rao", "mrp": 600, "b2b": 150 },
  { "id": 6, "name": "24 Hrs Urine - Uric Acid", "mrp": 250, "b2b": 100 },
  { "id": 7, "name": "24 hrs Urine Cortisol", "mrp": 750, "b2b": 210 },
  { "id": 8, "name": "24 Hrs Urine - Uric Acid", "mrp": 550, "b2b": 200 },
  { "id": 9, "name": "25-Hydroxy Vitamin-D", "mrp": 1250, "b2b": 300 },
  { "id": 10, "name": "Dihydrotestosterone", "mrp": 4500, "b2b": 2500 },
  { "id": 11, "name": "5-Hydroxy Indole Acetic Acid (5-HIAA)", "mrp": 5500, "b2b": 2600 },
  { "id": 12, "name": "(ADA) Adenosine deaminase-Pericardial Fluid", "mrp": 550, "b2b": 200 },
  { "id": 13, "name": "(ADA) Adenosine deaminase-Perotinial Fluid", "mrp": 550, "b2b": 200 },
  { "id": 14, "name": "(ADA) Adenosine deaminase-Pleural Fluid", "mrp": 200, "b2b": 200 },
  { "id": 15, "name": "Absolute Basophil Count", "mrp": 150, "b2b": 80 },
  { "id": 16, "name": "Absolute CD3 Count", "mrp": 1200, "b2b": 500 },
  { "id": 17, "name": "Absolute CD4 Count", "mrp": 1200, "b2b": 500 },
  { "id": 18, "name": "Absolute Eosinophil Count", "mrp": 150, "b2b": 85 },
  { "id": 19, "name": "Absolute Lymphocyte Count", "mrp": 150, "b2b": 85 },
  { "id": 20, "name": "Absolute Monocyte Count", "mrp": 150, "b2b": 80 },
  { "id": 21, "name": "Absolute Neutrophils Count", "mrp": 200, "b2b": 85 },
  { "id": 22, "name": "Acetaminophen (Paracetamol) Serum", "mrp": 2200, "b2b": 960 },
  { "id": 23, "name": "Acetyl Choline Receptor Antibody(ACHR)", "mrp": 4500, "b2b": 2300 },
  { "id": 24, "name": "Acid Fast Bacilli - Sputum", "mrp": 250, "b2b": 125 },
  { "id": 25, "name": "Acid Fast Suspectibility - 10 drugs(MGIT Method)", "mrp": 12500, "b2b": 7000 },
  { "id": 26, "name": "Acid Phosphatase (Total)", "mrp": 600, "b2b": 360 },
  { "id": 27, "name": "Activated Partial Thromboplastin Time (APTT)", "mrp": 400, "b2b": 100 },
  { "id": 28, "name": "ADA-Adenosine deaminase -Ascitic Fluid", "mrp": 600, "b2b": 200 },
  { "id": 29, "name": "Adenosine Deaminase (ADA) -Any Sample", "mrp": 550, "b2b": 200 },
  { "id": 30, "name": "Adenosine Deaminase (ADA)-CSF", "mrp": 550, "b2b": 200 },
  { "id": 31, "name": "Adenosine Deaminase (ADA)-PUS", "mrp": 550, "b2b": 200 },
  { "id": 32, "name": "Adenosine Deaminase (ADA)-Serum", "mrp": 550, "b2b": 180 },
  { "id": 33, "name": "ADH-Anti Diuretic Hormone Vasopressin", "mrp": 7800, "b2b": 4200 },
  { "id": 34, "name": "Adreno Corticotrophic Hormone (ACTH)", "mrp": 2000, "b2b": 650 },
  { "id": 35, "name": "AFB Culture & Sensitivity 1st Line Drugs Sirep by Bactec", "mrp": 9500, "b2b": 4900 },
  { "id": 36, "name": "AFB Culture By Bactec (MGIT) Method", "mrp": 2500, "b2b": 1200 },
  { "id": 37, "name": "AFB Stain (ZN Stain)- Miscellaneous", "mrp": 350, "b2b": 100 },
  { "id": 38, "name": "AFB-Gene Xpert", "mrp": 4000, "b2b": 1600 },
  { "id": 39, "name": "Alanine Transaminase (ALT/SGPT)", "mrp": 150, "b2b": 75 },
  { "id": 40, "name": "Albert Stain (C.diphtheriae)", "mrp": 350, "b2b": 120 },
  { "id": 41, "name": "Albumin-Fluid", "mrp": 250, "b2b": 80 },
  { "id": 42, "name": "Albumin-Serum", "mrp": 150, "b2b": 50 },
  { "id": 43, "name": "Alcohol -Serum", "mrp": 2000, "b2b": 650 },
  { "id": 44, "name": "Alcohol -Urine", "mrp": 2500, "b2b": 1100 },
  { "id": 45, "name": "Aldolase-Serum", "mrp": 2500, "b2b": 850 },
  { "id": 46, "name": "Aldosterone", "mrp": 2000, "b2b": 650 },
  { "id": 47, "name": "Aldosterone/Direct Renin Ratio", "mrp": 3000, "b2b": 1350 },
  { "id": 48, "name": "Alkaline Phosphatase (ALP)", "mrp": 150, "b2b": 90 },
  { "id": 49, "name": "Allergy Pannel - Inhalants", "mrp": 3000, "b2b": 1800 },
  { "id": 50, "name": "Allergy Pannel - Vegetarian", "mrp": 3000, "b2b": 1800 },
  { "id": 51, "name": "Allergy Pannel Drugs", "mrp": 3500, "b2b": 1800 },
  { "id": 52, "name": "Allergy Pannel Non - Vegetarian", "mrp": 3000, "b2b": 1800 },
  { "id": 53, "name": "Alpha 1 Antitrypsin-AAT", "mrp": 2750, "b2b": 950 },
  { "id": 54, "name": "Alpha Feto Protein - AFP - Serum", "mrp": 700, "b2b": 200 },
  { "id": 55, "name": "Alpha Feto Protein - AFP - Titre", "mrp": 700, "b2b": 420 },
  { "id": 56, "name": "Alpha Feto Protein - AFP- Amniotic Fluid", "mrp": 750, "b2b": 450 },
  { "id": 57, "name": "Alpha Thalassemia Mutaion Analysis- 5 Deletions", "mrp": 12000, "b2b": 4500 },
  { "id": 58, "name": "Aluminium", "mrp": 2800, "b2b": 950 },
  { "id": 59, "name": "Amino Acids Qualitative Urine", "mrp": 4000, "b2b": 1600 },
  { "id": 60, "name": "Aminovulinic Acid (ALA) - Random Urine", "mrp": 3500, "b2b": 1450 },
  { "id": 61, "name": "Ammonia", "mrp": 1500, "b2b": 600 },
  { "id": 62, "name": "Amoebiasis (Entamoeba Histolytica)-IgG", "mrp": 1900, "b2b": 700 },
  { "id": 63, "name": "Amylase - Body Fluid", "mrp": 400, "b2b": 110 },
  { "id": 64, "name": "Amylase - Serum", "mrp": 400, "b2b": 110 },
  { "id": 65, "name": "Amylase-Urine-Random", "mrp": 450, "b2b": 110 },
  { "id": 66, "name": "Anaerobic Blood Culture", "mrp": 1790, "b2b": 1200 },
  { "id": 67, "name": "Anaerobic Pus/ Body Fluid Culture", "mrp": 1790, "b2b": 1200 },
  { "id": 68, "name": "Androstenedione (A4)", "mrp": 1950, "b2b": 800 },
  { "id": 69, "name": "Angiotensin Converting Enzyme (ACE)", "mrp": 1500, "b2b": 650 },
  { "id": 70, "name": "Anti Cyclic Citrullinated Peptide Antibody (CCP)", "mrp": 1700, "b2b": 450 },
  { "id": 71, "name": "Anti Cysticercosis (IgG) Antibody - CSF", "mrp": 2590, "b2b": 1500 },
  { "id": 72, "name": "Anti Cysticercosis (IgG) Antibody - Serum", "mrp": 2500, "b2b": 1200 },
  { "id": 73, "name": "Anti ds-DNA Antibody", "mrp": 1000, "b2b": 300 },
  { "id": 74, "name": "Anti ds-DNA Antibody Titre", "mrp": 3250, "b2b": 1950 },
  { "id": 75, "name": "Anti factor Xa assay", "mrp": 10000, "b2b": 5600 },
  { "id": 76, "name": "Anti Ganglioside Antibodies - IgG", "mrp": 6500, "b2b": 3200 },
  { "id": 77, "name": "Anti Ganglioside Antibodies - IgM", "mrp": 6500, "b2b": 3200 },
  { "id": 78, "name": "Anti HBC IgG", "mrp": 1200, "b2b": 450 },
  { "id": 79, "name": "Anti Jo-I Antibody", "mrp": 2500, "b2b": 1200 },
  { "id": 80, "name": "Anti Microsomal/Thyroperoxidase Antibody\n(AMA/AntiTPO)", "mrp": 1200, "b2b": 250 },
  { "id": 81, "name": "Anti Mullarian Hormone (AMH)", "mrp": 2000, "b2b": 750 },
  { "id": 82, "name": "Anti Neutrophilic Cytoplasmic Antibody (ANCA)", "mrp": 4100, "b2b": 2000 },
  { "id": 83, "name": "Anti Nuclear Antibody - IFA (Qualitative)", "mrp": 1750, "b2b": 600 },
  { "id": 84, "name": "Anti Nuclear Antibody (ANA)", "mrp": 650, "b2b": 200 },
  { "id": 85, "name": "Anti Nuclear Antibody -Titres", "mrp": 1000, "b2b": 600 },
  { "id": 86, "name": "Anti Phospholipid Antibody IgG", "mrp": 1000, "b2b": 225 },
  { "id": 87, "name": "An Phospholipid Anbody IgM", "mrp": 700, "b2b": 225 },
  { "id": 88, "name": "An Rabies Anbodies Total", "mrp": 5500, "b2b": 3200 },
  { "id": 89, "name": "An Sm/RNP Anbody", "mrp": 2700, "b2b": 1500 },
  { "id": 90, "name": "An Smooth Muscle Anbody - IFA", "mrp": 3200, "b2b": 1500 },
  { "id": 91, "name": "An Sperm Anbody", "mrp": 2100, "b2b": 1000 },
  { "id": 92, "name": "An SS-A Anbody", "mrp": 2000, "b2b": 900 },
  { "id": 93, "name": "An SS-B Anbody", "mrp": 2000, "b2b": 900 },
  { "id": 94, "name": "An Thrombin III Acvity", "mrp": 4500, "b2b": 1800 },
  { "id": 134, "name": "Biopsy-Extra Large Specimen", "mrp": 2500, "b2b": 780 },
  { "id": 135, "name": "Biopsy-Large Specimen (> 5cm)", "mrp": 1500, "b2b": 600 },
  { "id": 136, "name": "Bionidas Level", "mrp": 9000, "b2b": 3500 },
  { "id": 137, "name": "Bleeding Time & Clong Time", "mrp": 150, "b2b": 50 },
  { "id": 138, "name": "Blood Culture (Aerobic)", "mrp": 300, "b2b": 150 },
  { "id": 139, "name": "Blood Grouping(ABO) and Rh factor", "mrp": 100, "b2b": 50 },
  { "id": 140, "name": "Blood Picture - Peripheral Smear Examinaon", "mrp": 200, "b2b": 60 },
  { "id": 141, "name": "Blood Urea Nitrogen (BUN)", "mrp": 130, "b2b": 50 },
  { "id": 142, "name": "Blood Urea Nitrogen/Creanine Rao", "mrp": 400, "b2b": 240 },
  { "id": 143, "name": "Bone Marrow Examinaon", "mrp": 1000, "b2b": 600 },
  { "id": 144, "name": "Bone Marrow Iron Stain", "mrp": 1000, "b2b": 600 },
  { "id": 145, "name": "Bordetella Pertusis Anbody IgG Serum", "mrp": 3500, "b2b": 2000 },
  { "id": 146, "name": "BRCA1 & BRCA2 deleon/duplicaon analysis** - EDTA Whole blood", "mrp": 14500, "b2b": 11000 },
  { "id": 147, "name": "Brucella - IgM Anbody", "mrp": 1600, "b2b": 650 },
  { "id": 148, "name": "Brucella Anbody (B.Abortus & B.Melitensis)", "mrp": 2000, "b2b": 750 },
  { "id": 149, "name": "Brucella IgG - Anbody", "mrp": 1600, "b2b": 650 },
  { "id": 150, "name": "BUN Creanine Rao", "mrp": 500, "b2b": 60 },
  { "id": 151, "name": "C ANCA - PR3 (anneutrophil Cytoplasmic anbodies)", "mrp": 1650, "b2b": 700 },
  { "id": 152, "name": "C 1 Esterase inhibitor Protein(C1-INH)", "mrp": 5850, "b2b": 2600 },
  { "id": 153, "name": "CA 72.4", "mrp": 4300, "b2b": 1350 },
  { "id": 154, "name": "CA125 - Ovarian Cancer marker", "mrp": 1200, "b2b": 250 },
  { "id": 155, "name": "CA125 - Titre", "mrp": 1200, "b2b": 250 },
  { "id": 156, "name": "CA15.3 - Breast Cancer marker", "mrp": 2400, "b2b": 700 },
  { "id": 157, "name": "CA19.9 - Pancreatic Cancer Marker", "mrp": 1200, "b2b": 500 },
  { "id": 158, "name": "CA19.9 - Titre", "mrp": 2000, "b2b": 780 },
  { "id": 159, "name": "Cadmium - Blood", "mrp": 2700, "b2b": 900 },
  { "id": 160, "name": "Cadmium - Urine", "mrp": 6900, "b2b": 3200 },
  { "id": 161, "name": "Calcitonin", "mrp": 1600, "b2b": 850 },
  { "id": 162, "name": "Calcium - 24 hrs Urine", "mrp": 500, "b2b": 100 },
  { "id": 163, "name": "Calcium - Random Urine", "mrp": 400, "b2b": 75 },
  { "id": 164, "name": "Calcium - Serum", "mrp": 150, "b2b": 50 },
  { "id": 165, "name": "Calprotectin-Stool", "mrp": 5000, "b2b": 2300 },
  { "id": 166, "name": "Cannabis Marijuna (THC) Urine Spot.", "mrp": 1500, "b2b": 600 },
  { "id": 167, "name": "Carbamazepine (Tegretol)", "mrp": 1000, "b2b": 600 },
  { "id": 168, "name": "Carcino Embryonic Antigen (CEA)", "mrp": 1000, "b2b": 300 },
  { "id": 169, "name": "Carcino Embryonic Antigen (CEA) - Any Sample", "mrp": 1200, "b2b": 420 },
  { "id": 170, "name": "Cardiolipin IgA Antibody", "mrp": 750, "b2b": 250 },
  { "id": 171, "name": "Cardiolipin IgG Antibody", "mrp": 750, "b2b": 250 },
  { "id": 172, "name": "Cardiolipin IgM Antibody", "mrp": 750, "b2b": 250 },
  { "id": 173, "name": "Catecholamines - Plasma", "mrp": 12000, "b2b": 5500 },
  { "id": 174, "name": "Catecholamines - Urine", "mrp": 8000, "b2b": 3800 },
  { "id": 175, "name": "CD-19 Marker (Flocytometry)", "mrp": 4500, "b2b": 2100 },
  { "id": 176, "name": "CD-20 Marker (Flocytometry)", "mrp": 4500, "b2b": 2100 },
  { "id": 177, "name": "CD3/CD4/CD8", "mrp": 1200, "b2b": 500 },
  { "id": 178, "name": "CD33", "mrp": 3850, "b2b": 1900 },
  { "id": 179, "name": "Cell Block Preparation for HPE", "mrp": 900, "b2b": 300 },
  { "id": 180, "name": "Centromere Antibody Serum", "mrp": 3850, "b2b": 1400 },
  { "id": 181, "name": "Ceruloplasmin", "mrp": 2100, "b2b": 550 },
  { "id": 182, "name": "Cervical Swab Culture / Urethral Swab Culture", "mrp": 450, "b2b": 270 },
  { "id": 183, "name": "Chikungunya IgG", "mrp": 600, "b2b": 360 },
  { "id": 184, "name": "Chikungunya IgM", "mrp": 600, "b2b": 360 },
  { "id": 185, "name": "Chikungunya RNA PCR - Qualitative", "mrp": 3200, "b2b": 1500 },
  { "id": 186, "name": "Chlamydia Trachomatis IgA", "mrp": 1950, "b2b": 1000 },
  { "id": 187, "name": "Chlamydia Trachomatis IgG", "mrp": 1200, "b2b": 500 },
  { "id": 188, "name": "Chlamydia Trachomatis IgM", "mrp": 1200, "b2b": 500 },
  { "id": 189, "name": "Chloride - 24 hours Urine", "mrp": 200, "b2b": 60 },
  { "id": 190, "name": "Chloride-CSF", "mrp": 200, "b2b": 120 },
  { "id": 191, "name": "Chloride-Serum", "mrp": 200, "b2b": 120 },
  { "id": 192, "name": "Cholesterol - Total", "mrp": 200, "b2b": 90 },
  { "id": 193, "name": "Cholesterol-LDL", "mrp": 200, "b2b": 90 },
  { "id": 194, "name": "Cholinesterase", "mrp": 1000, "b2b": 300 },
  { "id": 195, "name": "Chromium-Urine", "mrp": 5800, "b2b": 2800 },
  { "id": 196, "name": "Chromium-WB EDTA", "mrp": 2100, "b2b": 800 },
  { "id": 197, "name": "Chromogranin A", "mrp": 5500, "b2b": 2750 },
  { "id": 198, "name": "Chromosomal Analysis - Peripheral Blood", "mrp": 4500, "b2b": 1500 },
  { "id": 199, "name": "Chromosomal Analysis (Amniotic Fluid)-FISH Technique", "mrp": 11000, "b2b": 6600 },
  { "id": 200, "name": "Chromosomal Analysis (Amnoitic Fluid)", "mrp": 11000, "b2b": 6000 },
  { "id": 201, "name": "Chromosomal Analysis (POC) By FISH Technique", "mrp": 16000, "b2b": 9000 },
  { "id": 202, "name": "Chromosomal Microarray 315K", "mrp": 29000, "b2b": 16000 },
  { "id": 203, "name": "Chromosome Analysis (POC)", "mrp": 12000, "b2b": 5600 },
  { "id": 204, "name": "Clinical Exome NGS with 6500 genes - 100X depth", "mrp": 35000, "b2b": 24000 },
  { "id": 205, "name": "Clostridium difficile toxin-stool", "mrp": 4200, "b2b": 1900 },
  { "id": 206, "name": "Clotting Time", "mrp": 100, "b2b": 60 },
  { "id": 207, "name": "Cocaine-Urine", "mrp": 800, "b2b": 420 },
  { "id": 208, "name": "Complement 3 (C3)", "mrp": 800, "b2b": 250 },
  { "id": 209, "name": "Complement 4 (C4)", "mrp": 800, "b2b": 250 },
  { "id": 210, "name": "Complete Blood Count (CBC)", "mrp": 250, "b2b": 50 },
  { "id": 211, "name": "Coombs Test - Direct", "mrp": 450, "b2b": 180 },
  { "id": 212, "name": "Coombs Test - Indirect", "mrp": 450, "b2b": 180 },
  { "id": 213, "name": "Copper - 24 hrs- Urine", "mrp": 2500, "b2b": 900 },
  { "id": 214, "name": "Copper - serum", "mrp": 800, "b2b": 275 },
  { "id": 215, "name": "Copper - Spot Urine", "mrp": 4200, "b2b": 1900 },
  { "id": 216, "name": "Corsol - Random Urine", "mrp": 1000, "b2b": 200 },
  { "id": 217, "name": "Corsol -Morning", "mrp": 500, "b2b": 200 },
  { "id": 218, "name": "Corsol-Evening", "mrp": 500, "b2b": 200 },
  { "id": 219, "name": "C-Pepde", "mrp": 1000, "b2b": 400 },
  { "id": 228, "name": "Creanine-24 hrs Urine", "mrp": 250, "b2b": 150 },
  { "id": 229, "name": "Cryoglobulins Serum (Qualitave)", "mrp": 3100, "b2b": 900 },
  { "id": 230, "name": "Cryptococcal Angen Detecon - CSF", "mrp": 2900, "b2b": 1300 },
  { "id": 231, "name": "Cryptococcal Angen Titre - Serum", "mrp": 2700, "b2b": 1200 },
  { "id": 232, "name": "CUE - Complete Urine Analysis", "mrp": 100, "b2b": 50 },
  { "id": 233, "name": "Culture Aerobic - Ascic Fluid", "mrp": 450, "b2b": 125 },
  { "id": 234, "name": "Culture Aerobic - Ear Swab", "mrp": 450, "b2b": 125 },
  { "id": 235, "name": "Culture Aerobic - Eye Swab", "mrp": 450, "b2b": 125 },
  { "id": 244, "name": "Culture and Sensivity - Synovial Fluid", "mrp": 450, "b2b": 125 },
  { "id": 245, "name": "Culture and Sensivity - Urine (22 Drugs)", "mrp": 450, "b2b": 150 },
  { "id": 246, "name": "Culture and Sensivity(Any Sample)", "mrp": 450, "b2b": 125 },
  { "id": 247, "name": "Culture and Sensivity-Pus", "mrp": 450, "b2b": 125 },
  { "id": 248, "name": "Cyfra 21-1 Lung Cancer Marker", "mrp": 4900, "b2b": 2500 },
  { "id": 249, "name": "Cystan - C", "mrp": 1750, "b2b": 550 },
  { "id": 250, "name": "Cysc Fibrosis Mutaon Screening Test (72 Mutaon)", "mrp": 11000, "b2b": 7500 },
  { "id": 267, "name": "Dengue NS1 Angen - Elisa", "mrp": 1100, "b2b": 660 },
  { "id": 268, "name": "Dengue NS1 Angen - Rapid", "mrp": 1600, "b2b": 300 },
  { "id": 269, "name": "Desmoglein I Level Anbody", "mrp": 4500, "b2b": 2400 },
  { "id": 270, "name": "Desmoglein III Level Anbody", "mrp": 4500, "b2b": 2300 },
  { "id": 271, "name": "Dexamethasone Suppression Test-HIGH DOSE FOR ACTH", "mrp": 2600, "b2b": 1000 },
  { "id": 272, "name": "DHEA (Dehydroepiandrostenedione)", "mrp": 4600, "b2b": 2200 },
  { "id": 273, "name": "Differenal Count (DC)", "mrp": 100, "b2b": 60 },
  { "id": 274, "name": "Digoxin", "mrp": 1100, "b2b": 400 },
  { "id": 390, "name": "Hepas C Virus - Qualitave", "mrp": 4500, "b2b": 1500 },
  { "id": 391, "name": "Hepas C Virus (HCV Anbody) - Elisa", "mrp": 1500, "b2b": 200 },
  { "id": 392, "name": "Hepas C Virus RNA QUANTITATIVE - Viral Load", "mrp": 5000, "b2b": 1600 },
  { "id": 393, "name": "Hepas Core Anbody IgM (An HBc - IgM)", "mrp": 1000, "b2b": 350 },
  { "id": 394, "name": "Hepas Core Anbody Total (HBcAb- Total)", "mrp": 900, "b2b": 330 },
  { "id": 395, "name": "Hepas Delta Anbody (An HDV IgM)", "mrp": 4550, "b2b": 2200 },
  { "id": 396, "name": "Hepas E virus - IgG (HEV IgG)", "mrp": 1500, "b2b": 250 },
  { "id": 437, "name": "Immunoglobulin G (IgG)", "mrp": 600, "b2b": 300 },
  { "id": 438, "name": "Immunoglobulin M (IgM)", "mrp": 600, "b2b": 300 },
  { "id": 439, "name": "Immunophenotyping By Flowcytometry (Leukemia Panel- CLL/HCL/SLL BASIC)", "mrp": 12700, "b2b": 7200 },
  { "id": 440, "name": "Inhibin-A", "mrp": 2000, "b2b": 700 },
  { "id": 441, "name": "Inhibin-B", "mrp": 3500, "b2b": 1950 },
  { "id": 442, "name": "Insulin", "mrp": 650, "b2b": 200 },
  { "id": 443, "name": "Insulin - Like Growth Factor (IGF-I)", "mrp": 2500, "b2b": 1100 },
  { "id": 444, "name": "Insulin (Post Prandial)", "mrp": 650, "b2b": 200 },
  { "id": 469, "name": "Lead - Urine", "mrp": 3200, "b2b": 1850 },
  { "id": 470, "name": "Leptospira Anbody IgG", "mrp": 1550, "b2b": 750 },
  { "id": 471, "name": "Leptospira Anbody-IgM", "mrp": 1550, "b2b": 750 },
  { "id": 472, "name": "Leptospira DNA PCR", "mrp": 4500, "b2b": 1950 },
  { "id": 473, "name": "Leukemia - Acute Leukemia Panel", "mrp": 16000, "b2b": 8500 },
  { "id": 474, "name": "Leukemia Characterisaon Panel for CLPD Blood", "mrp": 21000, "b2b": 14000 },
  { "id": 475, "name": "Lipase", "mrp": 550, "b2b": 200 },
  { "id": 476, "name": "Lipase - Body Fluid", "mrp": 1000, "b2b": 200 },
  { "id": 485, "name": "Luteinizing Hormone (LH)", "mrp": 450, "b2b": 100 },
  { "id": 486, "name": "LymeBorrelia Burgdorferi IgG & IgM anbodies", "mrp": 7000, "b2b": 3200 },
  { "id": 487, "name": "Magnesium - Serum", "mrp": 500, "b2b": 150 },
  { "id": 488, "name": "Magnesium - Urine", "mrp": 500, "b2b": 150 },
  { "id": 489, "name": "Magnesium 24-Hrs Urine", "mrp": 600, "b2b": 150 },
  { "id": 490, "name": "Malarial Falciparum and Vivax Angen (Parasite V and F)", "mrp": 550, "b2b": 150 },
  { "id": 491, "name": "Malarial Parasite Idenficaon(QBC Method)", "mrp": 750, "b2b": 320 },
  { "id": 492, "name": "Malarial Parasite Idenficaon-Microscopy", "mrp": 100, "b2b": 50 },
  { "id": 493, "name": "Mantoux Test", "mrp": 150, "b2b": 90 },
  { "id": 494, "name": "Mean Corpuscular Volume (MCV)", "mrp": 260, "b2b": 150 },
  { "id": 495, "name": "Measles Anbody IgM", "mrp": 1600, "b2b": 750 },
  { "id": 496, "name": "Measles PCR Qualitave", "mrp": 4500, "b2b": 2700 },
  { "id": 497, "name": "Measles(Rubeola) Anbody IgG", "mrp": 1600, "b2b": 750 },
  { "id": 498, "name": "Mercury", "mrp": 2100, "b2b": 900 },
  { "id": 499, "name": "Metanephrine - Fraconated, EDTA Plasma", "mrp": 11500, "b2b": 5350 },
  { "id": 500, "name": "Metanephrines - Free Plasma", "mrp": 5500, "b2b": 3600 },
  { "id": 568, "name": "Any Sample Neisseria Gonorrhoea DNA Detecon by Real Time PCR -", "mrp": 4500, "b2b": 2800 },
  { "id": 569, "name": "Newborn Screening 40+ Analytes", "mrp": 4550, "b2b": 2500 },
  { "id": 570, "name": "Newborn Screening 48+ Analytes", "mrp": 6700, "b2b": 2900 },
  { "id": 571, "name": "Newborn Screening 7 Markers", "mrp": 3500, "b2b": 1250 },
  { "id": 572, "name": "Nicone/Conine", "mrp": 1000, "b2b": 300 },
  { "id": 573, "name": "NIPT - Extended along with Microdeleons", "mrp": 31000, "b2b": 25000 },
  { "id": 574, "name": "NIPT (Non-invasive Prenatal Test)", "mrp": 12000, "b2b": 7500 },
  { "id": 575, "name": "NMDA Receptor Anbody (NR1)", "mrp": 9500, "b2b": 4500 },
  { "id": 576, "name": "NMO (Aquaporin 4)Neuromyelis Opca Anbodies Serum", "mrp": 6900, "b2b": 3800 },
  { "id": 577, "name": "NMO with MOG Anbody Profile", "mrp": 11500, "b2b": 5500 },
  { "id": 578, "name": "Nor - Metanephrine - Free Plasma", "mrp": 7000, "b2b": 3200 },
  { "id": 579, "name": "Nor - Metanephrine - Urine 24 Hours", "mrp": 6800, "b2b": 3100 },
  { "id": 580, "name": "Oligoclonalbands -CSF", "mrp": 9000, "b2b": 3850 },
  { "id": 581, "name": "Oral Glucose Tolerance Test (O-GTT)", "mrp": 350, "b2b": 100 },
  { "id": 582, "name": "Osmolality - Urine", "mrp": 1130, "b2b": 420 },
  { "id": 583, "name": "Osmolality -Serum", "mrp": 1130, "b2b": 420 },
  { "id": 584, "name": "Osmoc Fragility Test", "mrp": 1800, "b2b": 900 },
  { "id": 585, "name": "OT Swabs for Aerobic Culture", "mrp": 400, "b2b": 240 },
  { "id": 586, "name": "Ova and Parasite Examinaon-Stool", "mrp": 500, "b2b": 100 },
  { "id": 587, "name": "Oxalate-24 hrs Urine", "mrp": 3600, "b2b": 1650 },
  { "id": 588, "name": "P ANCA - MPO (anneutrophil cytoplasmic anbodies)", "mrp": 1650, "b2b": 700 },
  { "id": 589, "name": "Packed Cell Volume(PCV)", "mrp": 250, "b2b": 150 },
  { "id": 590, "name": "Pancreac Elastase Test", "mrp": 7900, "b2b": 4800 },
  { "id": 591, "name": "Parietal Cell Anbody", "mrp": 2400, "b2b": 1500 },
  { "id": 600, "name": "Phosphorous - Serum", "mrp": 200, "b2b": 125 },
  { "id": 601, "name": "Phosphorus-24 hrs Urine", "mrp": 250, "b2b": 150 },
  { "id": 602, "name": "PLA2 receptor anbody Qualitave Serum", "mrp": 7500, "b2b": 3500 },
  { "id": 603, "name": "PLA2 receptor anbody Quantave Serum", "mrp": 7900, "b2b": 3600 },
  { "id": 604, "name": "Platelet Anbodies", "mrp": 7900, "b2b": 6800 },
  { "id": 605, "name": "Platelet Count", "mrp": 100, "b2b": 50 },
  { "id": 606, "name": "PlGF (Placental Growth Factor) Serum", "mrp": 7200, "b2b": 3000 },
  { "id": 607, "name": "Pneumocyss Carinii Detecon by IFA - BAL / Sputum", "mrp": 4500, "b2b": 2300 },
  { "id": 608, "name": "Porphobilinogen (PBG) 24- Hours Urine", "mrp": 7200, "b2b": 3000 },
  { "id": 609, "name": "Porphobilinogen (qualitave)- Random Urine", "mrp": 7000, "b2b": 2900 },
  { "id": 610, "name": "Post Lunch Urine Sugar", "mrp": 50, "b2b": 20 },
  { "id": 611, "name": "Potassium", "mrp": 200, "b2b": 120 },
  { "id": 612, "name": "Potassium- 24 hrs Urine", "mrp": 200, "b2b": 60 },
  { "id": 613, "name": "Potassium- Urine Random", "mrp": 200, "b2b": 120 },
  { "id": 614, "name": "Pre Albumin Serum", "mrp": 2100, "b2b": 900 },
  { "id": 615, "name": "Pre-eclampsia screening Serum - Basic", "mrp": 7500, "b2b": 3000 },
  { "id": 632, "name": "Protein Total with Albumin", "mrp": 300, "b2b": 180 },
  { "id": 633, "name": "Prothrombin Time (PT-INR)", "mrp": 350, "b2b": 100 },
  { "id": 634, "name": "Pseudo Cholinesterase", "mrp": 1200, "b2b": 480 },
  { "id": 635, "name": "QF-PCR 13, 18 and 21", "mrp": 11000, "b2b": 6000 },
  { "id": 636, "name": "QF-PCR Complete 13,15,18,21,22", "mrp": 14000, "b2b": 7000 },
  { "id": 637, "name": "QF-PCR Complete 13,18,21 + Microdeleon & duplicaons", "mrp": 19000, "b2b": 11000 },
  { "id": 646, "name": "RH Anbodies Titre", "mrp": 500, "b2b": 200 },
  { "id": 647, "name": "Rheumac Factor IgM Anbody", "mrp": 800, "b2b": 400 },
  { "id": 648, "name": "Rheumatoid Factor (RA test)", "mrp": 500, "b2b": 150 },
  { "id": 649, "name": "Rota Virus Angen", "mrp": 1200, "b2b": 600 },
  { "id": 650, "name": "Rubella RNA PCR", "mrp": 4500, "b2b": 2000 },
  { "id": 651, "name": "Rubella Virus - IgG", "mrp": 550, "b2b": 120 },
  { "id": 652, "name": "Rubella Virus - IgM", "mrp": 550, "b2b": 120 },
  { "id": 653, "name": "SAAG (Serum/Ascites Albumin Gradient)", "mrp": 900, "b2b": 400 },
  { "id": 662, "name": "Scrub Typhus Anbody IgG", "mrp": 2000, "b2b": 900 },
  { "id": 663, "name": "Scrub Typhus IgM", "mrp": 2000, "b2b": 900 },
  { "id": 664, "name": "Selenium", "mrp": 2500, "b2b": 970 },
  { "id": 665, "name": "Semen Analysis - Only Walkin", "mrp": 500, "b2b": 150 },
  { "id": 666, "name": "Semen for Fructose", "mrp": 700, "b2b": 300 },
  { "id": 667, "name": "Sex Hormone Binding Globulin (SHBG)", "mrp": 2100, "b2b": 900 },
  { "id": 668, "name": "Sickling test", "mrp": 200, "b2b": 120 },
  { "id": 669, "name": "Single Variant Confirmaon", "mrp": 10000, "b2b": 6500 },
  { "id": 700, "name": "Tacrolimus", "mrp": 7800, "b2b": 3200 },
  { "id": 701, "name": "TB Culture - Any Sample (Automated)", "mrp": 1000, "b2b": 600 },
  { "id": 702, "name": "TB Gold Gamma Interferon", "mrp": 2500, "b2b": 1100 },
  { "id": 703, "name": "Testosterone - Free", "mrp": 1600, "b2b": 350 },
  { "id": 704, "name": "Testosterone - Total", "mrp": 600, "b2b": 150 },
  { "id": 705, "name": "Tetanus Toxoid - IgG anbody", "mrp": 3900, "b2b": 2300 },
  { "id": 706, "name": "Thiopurine S-Methyltransferase (TPMT) Genotype", "mrp": 7900, "b2b": 4600 },
  { "id": 707, "name": "Thrombin Time", "mrp": 600, "b2b": 360 },
  { "id": 724, "name": "Transferrin", "mrp": 1000, "b2b": 300 },
  { "id": 725, "name": "Transferrin Saturaon%", "mrp": 1000, "b2b": 300 },
  { "id": 726, "name": "Treponema Pallidum Hemagglunaon (TPHA)", "mrp": 550, "b2b": 330 },
  { "id": 727, "name": "Tricyclic andepressants Drug(TCA)(Qualitave) - Urine Random", "mrp": 1750, "b2b": 650 },
  { "id": 728, "name": "Triglycerides (TG) - Urine", "mrp": 250, "b2b": 100 },
  { "id": 729, "name": "Triglycerides-TGL", "mrp": 250, "b2b": 100 },
  { "id": 730, "name": "TriIodothyronine Total (TT3)", "mrp": 300, "b2b": 75 },
  { "id": 731, "name": "Troponin - T", "mrp": 1500, "b2b": 900 },
  { "id": 740, "name": "Unsaturated Iron binding capacity", "mrp": 600, "b2b": 360 },
  { "id": 741, "name": "Urea", "mrp": 150, "b2b": 50 },
  { "id": 742, "name": "Urea-24 hrs Urine", "mrp": 200, "b2b": 120 },
  { "id": 743, "name": "Urea-Random Urine", "mrp": 300, "b2b": 200 },
  { "id": 744, "name": "Uric Acid Serum", "mrp": 150, "b2b": 60 },
  { "id": 745, "name": "Urine Calcium/Creanine Rao", "mrp": 380, "b2b": 150 },
  { "id": 746, "name": "Urine Culture and Sensivity", "mrp": 300, "b2b": 100 },
  { "id": 747, "name": "Urine for Chyle", "mrp": 600, "b2b": 250 },
  { "id": 772, "name": "VMA (Vanillyl Mandelic Acid) 24hr Urine", "mrp": 3100, "b2b": 1600 },
  { "id": 773, "name": "VMA (Vanillyl Mandelic Acid) Spot Urine", "mrp": 800, "b2b": 150 },
  { "id": 774, "name": "Voriconazole", "mrp": 7900, "b2b": 5000 },
  { "id": 775, "name": "Vw-Von Willebrand Angen", "mrp": 10000, "b2b": 6200 },
  { "id": 776, "name": "Weil - Felix Test", "mrp": 900, "b2b": 400 },
  { "id": 777, "name": "Whole Exome + Whole Mitochondrial Genome Sequencing", "mrp": 31000, "b2b": 18000 },
  { "id": 778, "name": "Whole Exome Sequencing - NGS", "mrp": 58000, "b2b": 31000 },
  { "id": 779, "name": "Whole Genome Sequencing - NGS", "mrp": 120000, "b2b": 81000 },
  { "id": 780, "name": "Widal Test (Slide Test)", "mrp": 200, "b2b": 100 },
  { "id": 781, "name": "Widal Test (Tube Test)", "mrp": 250, "b2b": 150 },
  { "id": 782, "name": "Ziehl Neelsen Stain (AFB - Urine)", "mrp": 250, "b2b": 125 },
  { "id": 783, "name": "Zinc - Serum", "mrp": 790, "b2b": 300 },
  { "id": 784, "name": "Zinc - Urine Random", "mrp": 3200, "b2b": 1750 },
  { "id": 785, "name": "Zinc Transporter 8 (ZNT8) Anbocy", "mrp": 5200, "b2b": 2500 },
  { "id": 786, "name": "Anemia Profile", "mrp": 2500, "b2b": 800 },
  { "id": 787, "name": "AnteNatal Profile I", "mrp": 1200, "b2b": 300 },
  { "id": 788, "name": "Arthritis Profile", "mrp": 3800, "b2b": 1800 },
  { "id": 789, "name": "ANA Blot (Profile)", "mrp": 4000, "b2b": 1900 },
  { "id": 790, "name": "Allergy Profile -Food - Veg", "mrp": 3000, "b2b": 1500 },
  { "id": 791, "name": "Allergy Profile -Food - Non veg", "mrp": 3000, "b2b": 1500 },
  { "id": 792, "name": "Allergy Profile -Food - inhalation", "mrp": 3000, "b2b": 1500 },
  { "id": 793, "name": "Allergy Profile -Food - Drugs", "mrp": 3500, "b2b": 2000 },
  { "id": 794, "name": "Allergy Profile -Food - Contacts", "mrp": 4000, "b2b": 2000 },
  { "id": 795, "name": "Allergy Profile - I", "mrp": 5500, "b2b": 3000 },
  { "id": 796, "name": "Allergy Profile - II", "mrp": 6500, "b2b": 3500 },
  { "id": 797, "name": "Breast Cancer Marker", "mrp": 3500, "b2b": 1300 },
  { "id": 798, "name": "Cardiac Screen", "mrp": 1250, "b2b": 600 },
  { "id": 799, "name": "Cardiovascular Risk Profile", "mrp": 8000, "b2b": 3800 },
  { "id": 800, "name": "Cardiolipin Screen", "mrp": 2000, "b2b": 600 },
  { "id": 801, "name": "Coagulation Profile - I", "mrp": 1800, "b2b": 650 },
  { "id": 802, "name": "Coagulation Profile II", "mrp": 7000, "b2b": 4200 },
  { "id": 803, "name": "Collagen/SLE PROFILE", "mrp": 5500, "b2b": 3200 },
  { "id": 804, "name": "Covid Monitering Pannel - I", "mrp": 1999, "b2b": 1050 },
  { "id": 805, "name": "Covid Monitering Pannel - II", "mrp": 6999, "b2b": 2200 },
  { "id": 806, "name": "Covid Immunity Profile", "mrp": 2999, "b2b": 1500 },
  { "id": 807, "name": "Covid Recovery Pannel", "mrp": 3999, "b2b": 1800 },
  { "id": 808, "name": "Drugs of Abuse (9 drugs)", "mrp": 6000, "b2b": 2500 },
  { "id": 809, "name": "Drugs of Abuse - 5 Drugs", "mrp": 4500, "b2b": 2000 },
  { "id": 810, "name": "Dual Marker with graph", "mrp": 2200, "b2b": 700 },
  { "id": 811, "name": "Dengue Profile - Rapid", "mrp": 1200, "b2b": 650 },
  { "id": 812, "name": "Dengue Profile - ELISA", "mrp": 2000, "b2b": 900 },
  { "id": 813, "name": "Electrolyte Profile", "mrp": 500, "b2b": 120 },
  { "id": 814, "name": "Fever Profile - I", "mrp": 800, "b2b": 300 },
  { "id": 815, "name": "Fever Profile - II", "mrp": 2500, "b2b": 900 },
  { "id": 816, "name": "Fertility Profile-I", "mrp": 900, "b2b": 250 },
  { "id": 817, "name": "Fertility Profile - II", "mrp": 1450, "b2b": 450 },
  { "id": 818, "name": "Fertility Profile - III", "mrp": 1000, "b2b": 300 },
  { "id": 819, "name": "Fertility Profile - IV", "mrp": 1800, "b2b": 520 },
  { "id": 820, "name": "Fertility Profile - V", "mrp": 3000, "b2b": 900 },
  { "id": 821, "name": "Fertility Profile Male", "mrp": 2500, "b2b": 450 },
  { "id": 822, "name": "Fertility Profile - Female", "mrp": 4500, "b2b": 1500 },
  { "id": 823, "name": "Hepatitis B Marker Profile", "mrp": 4600, "b2b": 1100 },
  { "id": 824, "name": "Hypertemsion Profile", "mrp": 1000, "b2b": 250 },
  { "id": 825, "name": "Hepatitis Profile", "mrp": 4000, "b2b": 2500 },
  { "id": 826, "name": "HIV Monitoring (Viral Load + CD3/CD4/CD8 )", "mrp": 6000, "b2b": 2200 },
  { "id": 827, "name": "Immunoglobulin Profile", "mrp": 1800, "b2b": 700 },
  { "id": 828, "name": "Iron Deficiency Profile I", "mrp": 1000, "b2b": 250 },
  { "id": 829, "name": "Iron Deficiency Profile II", "mrp": 1500, "b2b": 400 },
  { "id": 830, "name": "Kidney Function Test KFT", "mrp": 1200, "b2b": 250 },
  { "id": 831, "name": "Liver Function Test LFT", "mrp": 550, "b2b": 125 },
  { "id": 832, "name": "Lipid Profile", "mrp": 450, "b2b": 110 },
  { "id": 833, "name": "MedPath Health Profile - I", "mrp": 1999, "b2b": 500 },
  { "id": 834, "name": "MedPath Health Profile - II", "mrp": 2999, "b2b": 600 },
  { "id": 835, "name": "MedPath Health Profile - III", "mrp": 3199, "b2b": 750 },
  { "id": 836, "name": "MedPath Health Profile -IV", "mrp": 1599, "b2b": 700 },
  { "id": 837, "name": "MedPath Health Profile -V", "mrp": 2000, "b2b": 850 },
  { "id": 838, "name": "MedPath Health Profile VI", "mrp": 1600, "b2b": 800 },
  { "id": 839, "name": "MedPath Health Profile - Female", "mrp": 4999, "b2b": 1200 },
  { "id": 840, "name": "MedPath Health Profile - Male", "mrp": 4999, "b2b": 1200 },
  { "id": 841, "name": "MedPath Diabetic Profile I", "mrp": 1099, "b2b": 350 },
  { "id": 842, "name": "MedPath Diabetic profile II", "mrp": 3199, "b2b": 1000 },
  { "id": 843, "name": "MedPath Surgical Profile basic", "mrp": 2000, "b2b": 650 },
  { "id": 844, "name": "Polycystic Ovaries Screen", "mrp": 6000, "b2b": 2500 },
  { "id": 845, "name": "Quadruple Marker", "mrp": 2600, "b2b": 900 },
  { "id": 846, "name": "Thyroid Profile-I", "mrp": 450, "b2b": 90 },
  { "id": 847, "name": "Thyroid Profile-II", "mrp": 1000, "b2b": 220 },
  { "id": 848, "name": "Thyroid Profile - III", "mrp": 600, "b2b": 350 },
  { "id": 849, "name": "Thyroid Profile-IV", "mrp": 550, "b2b": 180 },
  { "id": 850, "name": "Thyroid Profile - V", "mrp": 600, "b2b": 175 },
  { "id": 851, "name": "Torch 10 Profile", "mrp": 2500, "b2b": 750 },
  { "id": 852, "name": "Torch Profile 8", "mrp": 2000, "b2b": 650 },
  { "id": 853, "name": "Torch 5 Profile (IgG)", "mrp": 1250, "b2b": 500 },
  { "id": 854, "name": "Torch 5 Profile (IgM)", "mrp": 1250, "b2b": 500 },
  { "id": 855, "name": "Torch 4 Profile (IgG)", "mrp": 1250, "b2b": 400 },
  { "id": 856, "name": "Torch 4 Profile (IgM)", "mrp": 1250, "b2b": 400 },
  { "id": 857, "name": "Triple Marker with graph", "mrp": 2400, "b2b": 500 },
  { "id": 858, "name": "Thrombotic Risk Screen", "mrp": 16000, "b2b": 7200 },
  { "id": 859, "name": "Vitamin Profile", "mrp": 1750, "b2b": 450 },
  { "id": 860, "name": "Renal Function Test", "mrp": 1000, "b2b": 250 },
  { "id": 861, "name": "Covid Anti Body Profile - IgG & Total", "mrp": 1500, "b2b": 700 },
  { "id": 862, "name": "Fever Profile Plane", "mrp": 1000, "b2b": 200 },
  { "id": 863, "name": "Hyper Tension Profile - II", "mrp": 18000, "b2b": 12100 },
  { "id": 864, "name": "MedPath Fever Profile - Maxi", "mrp": 2500, "b2b": 1000 },
  { "id": 865, "name": "Medpath STD Pannel", "mrp": 4000, "b2b": 2500 },
  { "id": 866, "name": "MMR Immunity Profile", "mrp": 3500, "b2b": 1600 },
  { "id": 867, "name": "MPD Tumor Pannel", "mrp": 3500, "b2b": 1400 },
  { "id": 868, "name": "PCOD Profile", "mrp": 2500, "b2b": 1150 },
  { "id": 869, "name": "Surgical Profile - Major", "mrp": 3000, "b2b": 1000 },
  { "id": 870, "name": "MPD Vitamin Package", "mrp": 4600, "b2b": 2500 },
  { "id": 871, "name": "Antenatal Profile - II", "mrp": 1500, "b2b": 350 },
  { "id": 872, "name": "APLA Profile", "mrp": 9000, "b2b": 3250 },
  { "id": 873, "name": "Arthritis Profile - II", "mrp": 2000, "b2b": 750 },
  { "id": 874, "name": "BOH (Bad Obstetric History) Profile", "mrp": 6500, "b2b": 2500 },
  { "id": 875, "name": "Diabetes Check-up (3 Tests)", "mrp": 600, "b2b": 150 },
  { "id": 876, "name": "Fever Profile - III", "mrp": 2500, "b2b": 1000 },
  { "id": 877, "name": "Fever Profile-II & Chikungunya IgGIgM", "mrp": 3500, "b2b": 1000 },
  { "id": 878, "name": "HSV Profile", "mrp": 1250, "b2b": 500 },
  { "id": 879, "name": "Medpath STD Pannel", "mrp": 6500, "b2b": 3300 },
  { "id": 880, "name": "MPD Tumor Pannel", "mrp": 4500, "b2b": 2000 },
  { "id": 881, "name": "PCOD PANEL", "mrp": 3500, "b2b": 1800 },
  { "id": 882, "name": "Surgical Profile - Minor", "mrp": 2500, "b2b": 650 },
  { "id": 883, "name": "Thalassemia Profile", "mrp": 2500, "b2b": 800 },
  { "id": 884, "name": "Vitamin B Complex profile", "mrp": 4500, "b2b": 2800 },
  { "id": 885, "name": "MPD Health Profile - 2.1", "mrp": 1500, "b2b": 350 },
  { "id": 886, "name": "MPD Health Profile - 2.2", "mrp": 1750, "b2b": 500 },
  { "id": 887, "name": "MPD Health Profile - 2.3", "mrp": 2500, "b2b": 800 },
  { "id": 888, "name": "MPD Health Profile - 2.4", "mrp": 2100, "b2b": 700 },
  { "id": 889, "name": "MPD Health Profile - 2.5", "mrp": 2500, "b2b": 1150 },
  { "id": 890, "name": "MPD Health Profile - 2.6", "mrp": 6500, "b2b": 2000 },
  { "id": 891, "name": "AMH Diamond Profile", "mrp": 9000, "b2b": 4000 },
  { "id": 892, "name": "AMH Gold Plus Profile", "mrp": 3000, "b2b": 1350 },
  { "id": 893, "name": "AMH Platinum Profile", "mrp": 3800, "b2b": 1680 },
  { "id": 894, "name": "Thrambophilia Profile - Mini", "mrp": 16000, "b2b": 7500 },
  { "id": 895, "name": "Vasculitis Marker Profile", "mrp": 6000, "b2b": 4500 },
  { "id": 896, "name": "Myositis IgG (16 Antigen) Profile, Serum", "mrp": 16000, "b2b": 10500 },
  { "id": 897, "name": "Metabolic Screen Profile", "mrp": 9900, "b2b": 7700 },
  { "id": 898, "name": "Anti Synthetase Sysdrome Profile", "mrp": 7500, "b2b": 5000 },
  { "id": 899, "name": "AutoImmune Encephalitis Panel - CSF", "mrp": 24500, "b2b": 18000 },
  { "id": 900, "name": "Autoimmune Encephalitis Profile - 1, Serum", "mrp": 26500, "b2b": 22500 },
  { "id": 901, "name": "Filaria Profle", "mrp": 1850, "b2b": 1100 },
  { "id": 902, "name": "Hormonal profile-Male", "mrp": 2500, "b2b": 1000 },
  { "id": 903, "name": "Hormonal profile-Female", "mrp": 3800, "b2b": 1250 },
  { "id": 904, "name": "MedTrack Health Profile", "mrp": 16500, "b2b": 8900 },


  { "id": 95, "name": "Anti Thyroglobulin Antibody (ATG)", "mrp": 1200, "b2b": 250 },
  { "id": 96, "name": "Anti-SLA/LP IgG", "mrp": 5200, "b2b": 2800 },
  { "id": 97, "name": "Apolipoprotein A1(APO-A1)", "mrp": 1600, "b2b": 400 },
  { "id": 98, "name": "Apolipoprotein B (APO-B)", "mrp": 1600, "b2b": 400 },
  { "id": 99, "name": "APRC (Activated Protein C Resistance)", "mrp": 7500, "b2b": 3800 },
  { "id": 100, "name": "Arsenic - 24 Hours Urine", "mrp": 4500, "b2b": 2200 },
  { "id": 101, "name": "Arsenic - Blood", "mrp": 2850, "b2b": 900 },
  { "id": 102, "name": "Arsenic - Random Urine", "mrp": 4500, "b2b": 2200 },
  { "id": 103, "name": "Aryl Sulphatase A (Metachromatic Leucodystrophy)", "mrp": 15000, "b2b": 6500 },
  { "id": 104, "name": "ASCA-IgA Saccharomyces Cerevisiae Serum", "mrp": 2600, "b2b": 1250 },
  { "id": 105, "name": "ASCA-IgG Saccharomyces Cerevisiae Serum", "mrp": 2600, "b2b": 1250 },
  { "id": 106, "name": "ASO Titres (Anti Streptolysin O)", "mrp": 500, "b2b": 180 },
  { "id": 107, "name": "Aspartate Aminotransferase (AST/SGOT)", "mrp": 150, "b2b": 75 },
  { "id": 108, "name": "Aspergillosis IgE", "mrp": 2250, "b2b": 1400 },
  { "id": 109, "name": "Aspergillosis IgG antibodies", "mrp": 4500, "b2b": 2000 },
  { "id": 110, "name": "B type Natriuretic Peptide NT-Pro (BNP)", "mrp": 2500, "b2b": 900 },
  { "id": 111, "name": "Bacterial Meningitis Panel 5 antigen", "mrp": 9800, "b2b": 6000 },
  { "id": 112, "name": "Barbiturates", "mrp": 1200, "b2b": 300 },
  { "id": 113, "name": "BCR-ABL(9:22) Qualitative", "mrp": 8000, "b2b": 4000 },

  { "id": 220, "name": "C-Peptide Post Prandial", "mrp": 1000, "b2b": 400 },
  { "id": 221, "name": "C-Reactive Protein (CRP)", "mrp": 350, "b2b": 125 },
  { "id": 222, "name": "Creatine Kinase MB (CK-MB)", "mrp": 500, "b2b": 200 },
  { "id": 223, "name": "Creatine PhosphoKinase (CPK)", "mrp": 600, "b2b": 200 },
  { "id": 224, "name": "Creatinine - Any Fluid", "mrp": 150, "b2b": 50 },
  { "id": 225, "name": "Creatinine Clearence Test", "mrp": 600, "b2b": 270 },
  { "id": 226, "name": "Creatinine -Serum", "mrp": 200, "b2b": 50 },
  { "id": 227, "name": "Creatinine -Urine", "mrp": 200, "b2b": 50 },

  { "id": 236, "name": "Culture Aerobic - Nasal Swab", "mrp": 450, "b2b": 125 },
  { "id": 237, "name": "Culture Aerobic - Semen", "mrp": 450, "b2b": 125 },
  { "id": 238, "name": "Culture Aerobic - Throat Swab", "mrp": 450, "b2b": 125 },
  { "id": 239, "name": "Culture Aerobic - Vaginal Swab", "mrp": 300, "b2b": 125 },
  { "id": 240, "name": "Culture Aerobic CSF", "mrp": 450, "b2b": 125 },
  { "id": 241, "name": "Culture Aerobic Wound Swab", "mrp": 400, "b2b": 125 },
  { "id": 242, "name": "Culture and Sensitivity - Sputum", "mrp": 450, "b2b": 125 },
  { "id": 243, "name": "Culture and Sensitivity - Stool", "mrp": 450, "b2b": 125 },

  { "id": 251, "name": "Cytogenetic analysis for cancer", "mrp": 8000, "b2b": 2400 },
  { "id": 252, "name": "Cytology -Fluids", "mrp": 500, "b2b": 150 },
  { "id": 253, "name": "Cytology -FNAC", "mrp": 500, "b2b": 150 },
  { "id": 254, "name": "Cytology -Others", "mrp": 350, "b2b": 150 },
  { "id": 255, "name": "Cytology -PAP", "mrp": 500, "b2b": 150 },
  { "id": 256, "name": "Cytomegalovirus IgG (CMV)", "mrp": 500, "b2b": 200 },
  { "id": 257, "name": "Cytomegalovirus IgM (CMV)", "mrp": 500, "b2b": 200 },
  { "id": 258, "name": "Cytomegalovirus PCR - Qualitative", "mrp": 5000, "b2b": 2400 },
  { "id": 259, "name": "Cytomegalovirus PCR - Quantitative", "mrp": 6500, "b2b": 2900 },
  { "id": 260, "name": "D-Dimer", "mrp": 1000, "b2b": 400 },
  { "id": 261, "name": "Dehydroepiandrostenedione Sulphate (DHEA-S)", "mrp": 800, "b2b": 250 },
  { "id": 262, "name": "Dengue - RNA PCR", "mrp": 4500, "b2b": 2100 },
  { "id": 263, "name": "Dengue IgG - Elisa", "mrp": 800, "b2b": 225 },
  { "id": 264, "name": "Dengue IgG - Rapid", "mrp": 1000, "b2b": 250 },
  { "id": 265, "name": "Dengue IgM - Elisa", "mrp": 800, "b2b": 225 },
  { "id": 266, "name": "Dengue IgM - Rapid", "mrp": 1000, "b2b": 250 },

  { "id": 275, "name": "Diptheria IgG", "mrp": 4100, "b2b": 2200 },
  { "id": 276, "name": "Dopamine", "mrp": 5200, "b2b": 2000 },
  { "id": 277, "name": "Echinococcus Antibody IgG (Hydatid serology)", "mrp": 1250, "b2b": 600 },
  { "id": 278, "name": "EGFR Mutation Analysis", "mrp": 10000, "b2b": 5800 },
  { "id": 279, "name": "Electrolytes Urine", "mrp": 400, "b2b": 240 },
  { "id": 280, "name": "Elements 22 (Toxic/Nutrients)", "mrp": 1550, "b2b": 650 },
  { "id": 281, "name": "ENA Screen", "mrp": 6900, "b2b": 4500 },
  { "id": 282, "name": "Endomysial Antibody IgA", "mrp": 3900, "b2b": 2100 },
  { "id": 283, "name": "Endomysial Antibody IgG", "mrp": 5100, "b2b": 2600 },
  { "id": 284, "name": "Entamoeba Histolytica Antigen Detection By Immunochromatography", "mrp": 2000, "b2b": 900 },
  { "id": 285, "name": "Epstein Barr Virus IgG", "mrp": 2550, "b2b": 1200 },
  { "id": 286, "name": "Epstein Barr Virus IgM", "mrp": 2550, "b2b": 1200 },
  { "id": 287, "name": "Erythrocyte Count (RBC Count)", "mrp": 100, "b2b": 60 },
  { "id": 288, "name": "Erythrocyte Sedimentation Rate (ESR)", "mrp": 100, "b2b": 50 },
  { "id": 289, "name": "Erythropoietin (EPO)", "mrp": 2100, "b2b": 800 },
  { "id": 290, "name": "Estradiol (E2)", "mrp": 600, "b2b": 180 },
  { "id": 291, "name": "Estrogen/Progesterone Receptor (ER/PR)", "mrp": 2900, "b2b": 1500 },
  { "id": 292, "name": "ET Secretion for Culture and Sensitivity", "mrp": 400, "b2b": 240 },
  { "id": 293, "name": "Everolimus Blood by LC MSMS", "mrp": 8500, "b2b": 3900 },
  { "id": 294, "name": "Factor V Leiden Mutation", "mrp": 6500, "b2b": 3300 },
  { "id": 295, "name": "Factor VII", "mrp": 4200, "b2b": 1800 },
  { "id": 296, "name": "Factor VIII inhibitor assay", "mrp": 12000, "b2b": 7000 },
  { "id": 297, "name": "Factor-IX", "mrp": 3500, "b2b": 1200 },
  { "id": 298, "name": "Factor-V", "mrp": 5200, "b2b": 2100 },
  { "id": 299, "name": "Factor-VIII", "mrp": 3500, "b2b": 1800 },
  { "id": 300, "name": "Factor-X", "mrp": 6000, "b2b": 3600 },
  { "id": 301, "name": "Fasting Urine Sugar", "mrp": 50, "b2b": 20 },
  { "id": 302, "name": "Fecal Pancreatic Elastase", "mrp": 7000, "b2b": 4500 },
  { "id": 303, "name": "Ferritin", "mrp": 550, "b2b": 180 },
  { "id": 304, "name": "Fibrinogen", "mrp": 750, "b2b": 350 },
  { "id": 305, "name": "Fibrinogen Degradation Product (FDP)", "mrp": 1000, "b2b": 600 },
  { "id": 306, "name": "Fibroblast Growth Factor 23", "mrp": 15000, "b2b": 7500 },
  { "id": 307, "name": "FISH - 22q DiGeorge Syndrome", "mrp": 10000, "b2b": 5500 },
  { "id": 308, "name": "FISH - Angleman Syndrome", "mrp": 10000, "b2b": 5500 },
  { "id": 309, "name": "FISH - Prader willi Syndrome", "mrp": 10000, "b2b": 5500 },
  { "id": 310, "name": "FISH for CML BCR/ABL1", "mrp": 10000, "b2b": 5500 },
  { "id": 311, "name": "FISH for AML1/ETO", "mrp": 10000, "b2b": 5500 },
  { "id": 312, "name": "FISH for Downs syndrome(chr 21)", "mrp": 10000, "b2b": 5500 },
  { "id": 313, "name": "FISH for Edward syndrome(chr 18)", "mrp": 10000, "b2b": 5500 },
  { "id": 314, "name": "FISH for ERBB2/CEN 17(HER2/neu)", "mrp": 18000, "b2b": 11000 },
  { "id": 315, "name": "FISH for MLL Break Part", "mrp": 10000, "b2b": 5500 },
  { "id": 316, "name": "FISH for NHL FGFR3/IGH", "mrp": 10000, "b2b": 5500 },
  { "id": 317, "name": "FISH for Patau's syndrome(chr 13)", "mrp": 10000, "b2b": 5500 },
  { "id": 318, "name": "FISH for PML/RARA", "mrp": 10000, "b2b": 5500 },
  { "id": 319, "name": "FISH for RB1/13q34", "mrp": 10000, "b2b": 5500 },
  { "id": 320, "name": "FISH for TP53/RARA", "mrp": 10000, "b2b": 5500 },
  { "id": 321, "name": "FISH Prenatal - 13, 18, 21", "mrp": 15000, "b2b": 6500 },
  { "id": 322, "name": "Fluid Analysis (Other Fluids)", "mrp": 500, "b2b": 350 },
  { "id": 323, "name": "Fluid Analysis II- CSF", "mrp": 500, "b2b": 300 },
  { "id": 324, "name": "Fluid Cell Count", "mrp": 500, "b2b": 125 },
  { "id": 325, "name": "Fluid Examination - Routine", "mrp": 400, "b2b": 240 },
  { "id": 326, "name": "Fluid Examination - Routine(CSF)", "mrp": 400, "b2b": 240 },
  { "id": 327, "name": "Fluid Examination - Routine(Pleural Fluid)", "mrp": 400, "b2b": 240 },
  { "id": 328, "name": "Fluid Examination - Routine(Synovial Fluid)", "mrp": 400, "b2b": 240 },
  { "id": 329, "name": "Fluid Examination (Any Fluid)", "mrp": 400, "b2b": 240 },
  { "id": 330, "name": "Fluorescent Treponemal Antibodies (FTA - Abs)", "mrp": 2900, "b2b": 1750 },
  { "id": 331, "name": "Folic Acid (Folate)", "mrp": 550, "b2b": 180 },
  { "id": 332, "name": "Follicle Stimulating Hormone (FSH)", "mrp": 500, "b2b": 100 },
  { "id": 333, "name": "Free Androgen Index (FAI)", "mrp": 3700, "b2b": 1500 },
  { "id": 334, "name": "Free Beta Human Chorionic Gonodotropin Hormone", "mrp": 1600, "b2b": 960 },
  { "id": 335, "name": "Fructosamine - Serum.", "mrp": 800, "b2b": 320 },
  { "id": 336, "name": "FT3 - TriIodothyronine Free", "mrp": 350, "b2b": 75 },
  { "id": 337, "name": "FT4 - Thyroxine - Free", "mrp": 350, "b2b": 75 },
  { "id": 338, "name": "Fungal Culture", "mrp": 900, "b2b": 540 },
  { "id": 339, "name": "Fungal Stain", "mrp": 240, "b2b": 240 },
  { "id": 340, "name": "GAD-65 AntibodyType I diabetes serum", "mrp": 6900, "b2b": 3400 },
  { "id": 341, "name": "Galactomannan Serum", "mrp": 4500, "b2b": 1800 },
  { "id": 342, "name": "Galactomannan-BAL Fluid", "mrp": 4800, "b2b": 2000 },
  { "id": 343, "name": "Gamma Glutamyl Transferase (GGT)", "mrp": 350, "b2b": 100 },
  { "id": 344, "name": "Gastrin", "mrp": 2000, "b2b": 800 },
  { "id": 345, "name": "GBM-Antibody serum", "mrp": 3500, "b2b": 1600 },
  { "id": 346, "name": "Giemsa Stain", "mrp": 400, "b2b": 180 },
  { "id": 347, "name": "Gliadin Antibody IgA", "mrp": 1250, "b2b": 600 },
  { "id": 348, "name": "Gliadin Antibody IgG", "mrp": 1250, "b2b": 600 },
  { "id": 349, "name": "Glomerular Basement Membrane Antibody IgG", "mrp": 3200, "b2b": 1700 },
  { "id": 350, "name": "Glomerular Filtration Rate (eGFR)", "mrp": 300, "b2b": 150 },
  { "id": 351, "name": "Glucagon Stimulation Test - For C-peptide Serum", "mrp": 4500, "b2b": 3000 },
  { "id": 352, "name": "Glucose - Fasting (F)", "mrp": 60, "b2b": 20 },
  { "id": 353, "name": "Glucose - Random", "mrp": 60, "b2b": 20 },
  { "id": 354, "name": "Glucose 6 Phosphate Dehydrogenase (G6PD Quantitative)", "mrp": 850, "b2b": 300 },
  { "id": 355, "name": "Glucose Challenge Test", "mrp": 250, "b2b": 120 },
  { "id": 356, "name": "Glucose Post Prandial (PP)", "mrp": 60, "b2b": 20 },
  { "id": 357, "name": "Glycosylated Haemoglobin (GHB/HbA1c)", "mrp": 450, "b2b": 150 },
  { "id": 358, "name": "Gonococcus (For Uretral )", "mrp": 450, "b2b": 150 },
  { "id": 359, "name": "Gram Stain", "mrp": 150, "b2b": 90 },
  { "id": 360, "name": "H1N1 (Swine Flu) RNA Detection", "mrp": 6500, "b2b": 2900 },
  { "id": 361, "name": "H3N2 / H1N1 Swine Influenza Virus PCR", "mrp": 8500, "b2b": 3900 },
  { "id": 362, "name": "Haemoglobin", "mrp": 100, "b2b": 50 },
  { "id": 363, "name": "Haemogram", "mrp": 350, "b2b": 150 },
  { "id": 364, "name": "Hains Mycobacterium Tuberculosis 1st line Drug resistance profile", "mrp": 4000, "b2b": 1800 },
  { "id": 365, "name": "Hanging drop of V.Cholerae", "mrp": 150, "b2b": 90 },
  { "id": 366, "name": "Haptoglobulin", "mrp": 1900, "b2b": 750 },
  { "id": 367, "name": "HBsAg-Elisa (Hepatitis B Surface antigen )", "mrp": 500, "b2b": 150 },
  { "id": 368, "name": "HBsAg-Rapid (Hepatitis B Surface antigen )", "mrp": 400, "b2b": 120 },
  { "id": 369, "name": "HCG-Tumour Marker", "mrp": 2200, "b2b": 700 },
  { "id": 370, "name": "HCV - Rapid", "mrp": 400, "b2b": 160 },
  { "id": 371, "name": "HDL Cholesterol", "mrp": 200, "b2b": 120 },
  { "id": 372, "name": "HE4 with ROMA index", "mrp": 4200, "b2b": 2500 },
  { "id": 373, "name": "Helicobacter Pylori Antigen", "mrp": 4700, "b2b": 1500 },
  { "id": 374, "name": "Helicobacter Pylori IgA", "mrp": 2100, "b2b": 1000 },
  { "id": 375, "name": "Helicobacter Pylori IgG", "mrp": 2100, "b2b": 1000 },
  { "id": 376, "name": "Helicobacter Pylori IgM", "mrp": 2100, "b2b": 1000 },
  { "id": 377, "name": "Hemoglobinopathy (Hb Electrophoresis)", "mrp": 1000, "b2b": 500 },
  { "id": 378, "name": "Hepatitis A virus IgG (HAV-IgG)", "mrp": 1100, "b2b": 250 },
  { "id": 379, "name": "Hepatitis A virus IgM-(HAV- IgM)", "mrp": 1100, "b2b": 250 },
  { "id": 380, "name": "Hepatitis B envelope Antibody (Anti HBe)", "mrp": 900, "b2b": 310 },
  { "id": 381, "name": "Hepatitis B Envelope Antigen (HBeAg)", "mrp": 900, "b2b": 310 },
  { "id": 382, "name": "Hepatitis B surface Antibody (Anti HBs)", "mrp": 900, "b2b": 260 },
  { "id": 383, "name": "Hepatitis B surface Antibody Total (Anti HBs) With Titers", "mrp": 1000, "b2b": 280 },
  { "id": 384, "name": "Hepatitis B Virus - Genotyping", "mrp": 7500, "b2b": 4500 },
  { "id": 385, "name": "Hepatitis B Virus - Genotyping + Drug Resistance", "mrp": 12000, "b2b": 6500 },
  { "id": 386, "name": "Hepatitis B Virus - Viral Load", "mrp": 4500, "b2b": 1500 },
  { "id": 387, "name": "Hepatitis B Virus DNA Qualitative PCR", "mrp": 3500, "b2b": 1200 },
  { "id": 388, "name": "Hepatitis B Virus Genotyping +Viral Load", "mrp": 12000, "b2b": 5600 },
  { "id": 389, "name": "Hepatitis C Virus - Genotyping", "mrp": 9500, "b2b": 5000 },
  { "id": 390, "name": "Hepatitis C Virus - Qualitative", "mrp": 4500, "b2b": 1500 },
  { "id": 391, "name": "Hepatitis C Virus (HCV Antibody) - Elisa", "mrp": 1500, "b2b": 200 },
  { "id": 392, "name": "Hepatitis C Virus RNA QUANTITATIVE - Viral Load", "mrp": 5000, "b2b": 1600 },
  { "id": 393, "name": "Hepatitis Core Antibody IgM (Anti HBc - IgM)", "mrp": 1000, "b2b": 350 },
  { "id": 394, "name": "Hepatitis Core Antibody Total (HBcAb- Total)", "mrp": 900, "b2b": 330 },
  { "id": 395, "name": "Hepatitis Delta Antibody (Anti HDV IgM)", "mrp": 4550, "b2b": 2200 },
  { "id": 396, "name": "Hepatitis E virus - IgG (HEV IgG)", "mrp": 1500, "b2b": 250 },
  { "id": 397, "name": "Hepatitis E virus - IgM (HEV IgM)", "mrp": 1500, "b2b": 250 },
  { "id": 398, "name": "HER-2/neu", "mrp": 2900, "b2b": 1500 },
  { "id": 399, "name": "HER-2/neu by Fish", "mrp": 1500, "b2b": 7900 },
  { "id": 400, "name": "Herpes Simplex Virus 1 & 2 IgG", "mrp": 600, "b2b": 240 },
  { "id": 401, "name": "Herpes Simplex Virus 1 & 2 IgM", "mrp": 600, "b2b": 240 },
  { "id": 402, "name": "Herpes Simplex Virus 1 and 2 DNA PCR Qualitative", "mrp": 6000, "b2b": 3200 },
  { "id": 403, "name": "Herpes Simplex Virus 1 and 2 DNA PCR-CSF Qualitative", "mrp": 6750, "b2b": 3400 },
  { "id": 404, "name": "Herpes Simplex Virus 1 IgG", "mrp": 600, "b2b": 150 },
  { "id": 405, "name": "Herpes Simplex Virus 1 IgM", "mrp": 600, "b2b": 150 },
  { "id": 406, "name": "Herpes Simplex Virus 2 IgG", "mrp": 600, "b2b": 150 },
  { "id": 407, "name": "Herpes Simplex Virus 2 IgM", "mrp": 600, "b2b": 150 },
  { "id": 408, "name": "High Sensitivity C-Reactive Protein(hsCRP)", "mrp": 800, "b2b": 350 },
  { "id": 409, "name": "Histopathology Slides and Blocks for Second Opinion", "mrp": 560, "b2b": 200 },
  { "id": 410, "name": "HIV - 1 RNA Virus - Quantitative - Viral Load", "mrp": 4500, "b2b": 1500 },
  { "id": 411, "name": "HIV 1 & 2 Antibody Rapid", "mrp": 400, "b2b": 150 },
  { "id": 412, "name": "HIV 1 and 2 Antibody - Elisa", "mrp": 450, "b2b": 150 },
  { "id": 413, "name": "HIV 1 and 2 Western Blot", "mrp": 2750, "b2b": 1000 },
  { "id": 414, "name": "HIV P-24 Combo", "mrp": 800, "b2b": 150 },
  { "id": 415, "name": "HIV-1 PRO VIRAL DNA (QUALITATIVE) by PCR", "mrp": 4000, "b2b": 1400 },
  { "id": 416, "name": "HIV-2 RNA Quantitative Viral load", "mrp": 4500, "b2b": 1500 },
  { "id": 417, "name": "HIV-DNA PCR - Qualitative", "mrp": 4000, "b2b": 1250 },
  { "id": 418, "name": "HIV-RNA PCR - Qualitative", "mrp": 4000, "b2b": 1250 },
  { "id": 419, "name": "HLA - B27 BY PCR Qualitative", "mrp": 5500, "b2b": 2000 },
  { "id": 420, "name": "HLA B-27", "mrp": 1500, "b2b": 650 },
  { "id": 421, "name": "HLA-B5 (B*51/52)", "mrp": 8000, "b2b": 3800 },
  { "id": 422, "name": "HOMA Index Insulin Resistance", "mrp": 1200, "b2b": 500 },
  { "id": 423, "name": "Homocysteine", "mrp": 1000, "b2b": 450 },
  { "id": 424, "name": "Human Growth Hormone (HGH)", "mrp": 1200, "b2b": 450 },
  { "id": 425, "name": "Human Metaneumo Virus (HMPV) Qualitative PCR", "mrp": 4500, "b2b": 2000 },
  { "id": 426, "name": "HUMAN PAPILLOMA VIRUS DETECTION BY PCR", "mrp": 4500, "b2b": 750 },
  { "id": 427, "name": "Hydatid Cyst Detection by Microscopy - Fluid", "mrp": 2000, "b2b": 650 },
  { "id": 428, "name": "IA2 Insulin Autoantibodies serum", "mrp": 4500, "b2b": 2100 },
  { "id": 429, "name": "IgG4 Sub Class Serum", "mrp": 7500, "b2b": 4500 },
  { "id": 430, "name": "IgVH GENE MUTATION", "mrp": 10000, "b2b": 6200 },
  { "id": 431, "name": "IHC - Extended Panel", "mrp": 9500, "b2b": 6000 },
  { "id": 432, "name": "IHC - Marker (Single)", "mrp": 4500, "b2b": 2000 },
  { "id": 433, "name": "IL-6 (Interlueken - 6 )", "mrp": 3500, "b2b": 850 },
  { "id": 434, "name": "Immature Platelet fraction", "mrp": 800, "b2b": 200 },
  { "id": 435, "name": "Immunofixation Electrophoresis(IFE)", "mrp": 10000, "b2b": 4950 },
  { "id": 436, "name": "Immunoglobulin A (IgA)", "mrp": 600, "b2b": 300 },

  { "id": 445, "name": "Insulin Antibodies", "mrp": 2700, "b2b": 1350 },
  { "id": 446, "name": "Intact Parathyroid Hormone (iPTH)", "mrp": 1200, "b2b": 300 },
  { "id": 447, "name": "Intrinsic Factor Antibody", "mrp": 3900, "b2b": 2100 },
  { "id": 448, "name": "Iodine-Serum", "mrp": 16500, "b2b": 10000 },
  { "id": 449, "name": "Ionized Calcium", "mrp": 750, "b2b": 150 },
  { "id": 450, "name": "Iron", "mrp": 300, "b2b": 100 },
  { "id": 451, "name": "Islet Cell Antibody serum", "mrp": 4500, "b2b": 2100 },
  { "id": 452, "name": "JAK-2 Mutation (CMPD) (V617F)", "mrp": 6500, "b2b": 3700 },
  { "id": 453, "name": "JAK2 Mutation Detection targeted mutation", "mrp": 12000, "b2b": 7500 },
  { "id": 454, "name": "Kappa & Lambda Free -Urine", "mrp": 7900, "b2b": 4400 },
  { "id": 455, "name": "Kappa And Lambda Free Light Chains", "mrp": 4500, "b2b": 2000 },
  { "id": 456, "name": "Ketone Body (D3 HB)-Serum", "mrp": 1000, "b2b": 390 },
  { "id": 457, "name": "KOH Preparation (Wet Mount)", "mrp": 200, "b2b": 120 },
  { "id": 458, "name": "KOH Preparation (Wet Mount)-Nail", "mrp": 200, "b2b": 120 },
  { "id": 459, "name": "KOH Preparation (Wet Mount)-Skin", "mrp": 200, "b2b": 120 },
  { "id": 460, "name": "Lactate Dehyderogenase (LDH) - Any Fluid", "mrp": 350, "b2b": 210 },
  { "id": 461, "name": "Lactate Dehyderogenase (LDH) - CSF", "mrp": 800, "b2b": 210 },
  { "id": 462, "name": "Lactate Dehyderogenase (LDH)-Ascitic Fluid", "mrp": 800, "b2b": 210 },
  { "id": 463, "name": "Lactate Dehyderogenase (LDH)-Pleural Fluid", "mrp": 800, "b2b": 210 },
  { "id": 464, "name": "Lactate Dehyderogenase (LDH)-Serum", "mrp": 350, "b2b": 180 },
  { "id": 465, "name": "Lactate-Plasma", "mrp": 1200, "b2b": 500 },
  { "id": 466, "name": "LAP (Leukocyte Alkaline Phosphatase) Score", "mrp": 2500, "b2b": 1200 },
  { "id": 467, "name": "LE Cells", "mrp": 1200, "b2b": 550 },
  { "id": 468, "name": "Lead - Blood", "mrp": 2700, "b2b": 850 },

  { "id": 477, "name": "Lipid Metabolism (Acyl carnitine)-Quantitative", "mrp": 11000, "b2b": 6500 },
  { "id": 478, "name": "Lipoprotein a (Lp-a)", "mrp": 800, "b2b": 350 },
  { "id": 479, "name": "Liquid Based Cytology(LBC)", "mrp": 1200, "b2b": 350 },
  { "id": 480, "name": "Lithium (Li)", "mrp": 900, "b2b": 350 },
  { "id": 481, "name": "Liver-Kidney Microsome (LKM) - 1 Antibody", "mrp": 1700, "b2b": 800 },
  { "id": 482, "name": "LKM 1 BY IFA", "mrp": 3200, "b2b": 1800 },
  { "id": 483, "name": "LP-PLA2", "mrp": 1200, "b2b": 500 },
  { "id": 484, "name": "Lupus Anticoagulant", "mrp": 1500, "b2b": 600 },

  { "id": 501, "name": "Metanephrines - urine 24 Hours", "mrp": 6400, "b2b": 2650 },
  { "id": 502, "name": "Meth-Haemoglobin", "mrp": 2000, "b2b": 900 },
  { "id": 503, "name": "Microalbumin/Creatinine Ratio-Urine Random", "mrp": 800, "b2b": 250 },
  { "id": 504, "name": "Microalbumin-24 Hours Urine", "mrp": 1000, "b2b": 200 },
  { "id": 505, "name": "Microalbumin-Random", "mrp": 500, "b2b": 180 },
  { "id": 506, "name": "Microfilaria Antibody Detection.", "mrp": 600, "b2b": 400 },
  { "id": 507, "name": "Microfilaria Antigen", "mrp": 500, "b2b": 300 },
  { "id": 508, "name": "Microsatellite Instability - cancer, Tissue sample", "mrp": 24000, "b2b": 14000 },
  { "id": 509, "name": "Mitochondrial (M2) Antibody", "mrp": 3550, "b2b": 1700 },
  { "id": 510, "name": "Molecular Aanalysis For Mutation In HBB Gene For β-Thalassemia", "mrp": 9200, "b2b": 4500 },
  { "id": 511, "name": "Molecular Analysis for ABCB1 (MDR1) Gene Polymorphism", "mrp": 6000, "b2b": 3000 },
  { "id": 512, "name": "Molecular Analysis for ACE Gene Polymorphism", "mrp": 6000, "b2b": 2500 },
  { "id": 513, "name": "Molecular Analysis for Ambiguous Genitalia/SRY Gene", "mrp": 6000, "b2b": 2500 },
  { "id": 514, "name": "Molecular Analysis for AR / SBMA-Spinal and Bulbar Muscular Atrophy", "mrp": 6000, "b2b": 2500 },
  { "id": 515, "name": "Molecular Analysis for Connexin 26 gene", "mrp": 10000, "b2b": 5500 },
  { "id": 516, "name": "Molecular Analysis for CYP2C19 gene polymorphism", "mrp": 6000, "b2b": 3000 },
  { "id": 517, "name": "Molecular Analysis for CYP2C9 gene polymorphism", "mrp": 6000, "b2b": 3000 },
  { "id": 518, "name": "Molecular analysis for CYP2C9* gene polymorphism", "mrp": 6000, "b2b": 3000 },
  { "id": 519, "name": "Molecular Analysis for CYP2D6 Duplication", "mrp": 11000, "b2b": 5500 },
  { "id": 520, "name": "Molecular Analysis for CYP3A5 gene polymorphism", "mrp": 6000, "b2b": 3000 },
  { "id": 521, "name": "Molecular analysis for Cystic Fibrosis", "mrp": 12000, "b2b": 5500 },
  { "id": 522, "name": "Molecular Analysis for DPYD - Dihydropyrimidine dehydrogenase", "mrp": 10000, "b2b": 4500 },
  { "id": 523, "name": "Molecular Analysis for ER and PR gene polymorphisms", "mrp": 8000, "b2b": 4000 },
  { "id": 524, "name": "Molecular Analysis for ER gene polymorphism", "mrp": 6000, "b2b": 3000 },
  { "id": 525, "name": "Molecular Analysis for Fragile-X Syndrome", "mrp": 12000, "b2b": 7500 },
  { "id": 526, "name": "Molecular Analysis for Friedrich's Ataxia gene polymorphism", "mrp": 6000, "b2b": 3000 },
  { "id": 527, "name": "Molecular Analysis for KRAS & NRAS Mutations", "mrp": 18000, "b2b": 10000 },
  { "id": 528, "name": "Molecular Analysis for Mitochondrial disorder (MELAS)", "mrp": 6000, "b2b": 3000 },
  { "id": 529, "name": "Molecular Analysis for Mitochondrial disorder (MERFF)", "mrp": 6000, "b2b": 3000 },
  { "id": 530, "name": "Molecular Analysis for MTHFR Gene Polymorphism", "mrp": 6000, "b2b": 3000 },
  { "id": 531, "name": "Molecular Analysis for Myotonic Dystrophy", "mrp": 9500, "b2b": 4500 },
  { "id": 532, "name": "Molecular Analysis for PR gene polymorphism", "mrp": 6000, "b2b": 2500 },
  { "id": 533, "name": "Molecular Analysis for Sickle Cell Anemia", "mrp": 9500, "b2b": 4500 },
  { "id": 534, "name": "Molecular Analysis for TNF Alpha Gene Polymorphism", "mrp": 6000, "b2b": 3000 },
  { "id": 535, "name": "Molecular analysis for UGT1A1 polymorphism", "mrp": 8000, "b2b": 4000 },
  { "id": 536, "name": "Molecular Analysis for VKORC1 gene polymorphism", "mrp": 6000, "b2b": 3000 },
  { "id": 537, "name": "Molecular analysis Y Chrmosome Microdelation", "mrp": 11500, "b2b": 6000 },
  { "id": 538, "name": "Molecular Analysis Y-Chromosome Microdeletion/ AZF", "mrp": 10000, "b2b": 5500 },
  { "id": 539, "name": "MPN Reflex Panel 3 (JAK2V617F CALR MPL)", "mrp": 12000, "b2b": 6500 },
  { "id": 540, "name": "MTB & MDR Assay - Rifampicin and Isoniazid", "mrp": 5900, "b2b": 3000 },
  { "id": 541, "name": "MTB Complex PCR - Abscess Fluid", "mrp": 2000, "b2b": 700 },
  { "id": 542, "name": "MTB Complex PCR - Ascitic Fluid", "mrp": 2000, "b2b": 700 },
  { "id": 543, "name": "MTB Complex PCR - Bronchial Lavage", "mrp": 2000, "b2b": 700 },
  { "id": 544, "name": "MTB Complex PCR - CSF", "mrp": 2000, "b2b": 700 },
  { "id": 545, "name": "MTB Complex PCR - Menstrual Blood", "mrp": 2000, "b2b": 700 },
  { "id": 546, "name": "MTB Complex PCR - Pericardial Fluid", "mrp": 2000, "b2b": 700 },
  { "id": 547, "name": "MTB Complex PCR - Peritonial Fluid", "mrp": 2000, "b2b": 700 },
  { "id": 548, "name": "MTB Complex PCR - Pleural Fluid", "mrp": 2000, "b2b": 700 },
  { "id": 549, "name": "MTB Complex PCR - PUS", "mrp": 2000, "b2b": 700 },
  { "id": 550, "name": "MTB Complex PCR - Sputum", "mrp": 2000, "b2b": 700 },
  { "id": 551, "name": "MTB Complex PCR - Synovial Fluid", "mrp": 2000, "b2b": 700 },
  { "id": 552, "name": "MTB Complex PCR - Tissue", "mrp": 2000, "b2b": 700 },
  { "id": 553, "name": "MTB Complex PCR - Urine", "mrp": 2000, "b2b": 700 },
  { "id": 554, "name": "MTB Complex PCR -Whole Blood", "mrp": 2000, "b2b": 700 },
  { "id": 555, "name": "MTB PCR - Any Sample", "mrp": 2000, "b2b": 700 },
  { "id": 556, "name": "MTHFR Muatation", "mrp": 6500, "b2b": 2800 },
  { "id": 557, "name": "Mumps- PCR", "mrp": 7900, "b2b": 4500 },
  { "id": 558, "name": "Mumps Virus Antibody IgG", "mrp": 1250, "b2b": 750 },
  { "id": 559, "name": "Mumps Virus Antibody IgM", "mrp": 1250, "b2b": 750 },
  { "id": 560, "name": "Musk Antibody Myasthenia Gravis", "mrp": 7900, "b2b": 4800 },
  { "id": 561, "name": "Mycoplasma Pneumoniae IgG", "mrp": 4600, "b2b": 2200 },
  { "id": 562, "name": "Mycoplasma Pneumoniae IgM", "mrp": 4600, "b2b": 2200 },
  { "id": 563, "name": "Myoglobulin - Serum", "mrp": 2900, "b2b": 890 },
  { "id": 564, "name": "Myoglobulin - Urine Random", "mrp": 2900, "b2b": 890 },
  { "id": 565, "name": "NARP (Neurogenic Ataxia Retinitis Pigmentosa Blood)", "mrp": 13000, "b2b": 6400 },
  { "id": 566, "name": "Natural Killer Cells", "mrp": 7900, "b2b": 3600 },
  { "id": 567, "name": "Negative Stain (Indian Ink)", "mrp": 1200, "b2b": 400 },

  { "id": 592, "name": "Parvovirus B19 IgG", "mrp": 3900, "b2b": 2100 },
  { "id": 593, "name": "Parvovirus B19 IgM", "mrp": 3900, "b2b": 2100 },
  { "id": 594, "name": "PCR Respiratory pathogen Panel: Multiplex RT-PCR", "mrp": 10500, "b2b": 5500 },
  { "id": 595, "name": "Pharmocogenomics Panel -PGX", "mrp": 20000, "b2b": 13000 },
  { "id": 596, "name": "Phenobarbital (Gardinal)", "mrp": 1600, "b2b": 750 },
  { "id": 597, "name": "Phenytoin (Eptoin)", "mrp": 1400, "b2b": 650 },
  { "id": 598, "name": "Pheripheral smear for Hemoparasite", "mrp": 300, "b2b": 180 },
  { "id": 599, "name": "Phosphorous - Random Urine", "mrp": 250, "b2b": 125 },

  { "id": 616, "name": "Pregnancy Associated Plasma Protein-A(PAPP-A)", "mrp": 900, "b2b": 550 },
  { "id": 617, "name": "Pregnancy Test", "mrp": 200, "b2b": 120 },
  { "id": 618, "name": "Procalcitonin", "mrp": 3250, "b2b": 1000 },
  { "id": 619, "name": "Progesterone", "mrp": 650, "b2b": 180 },
  { "id": 620, "name": "Prolactin", "mrp": 500, "b2b": 100 },
  { "id": 621, "name": "Prostate Specific Antigen (PSA - Total)", "mrp": 600, "b2b": 200 },
  { "id": 622, "name": "Prostate Specific Antigen (PSA-Free)", "mrp": 1000, "b2b": 600 },
  { "id": 623, "name": "Protein - 24 hrs Urine", "mrp": 250, "b2b": 75 },
  { "id": 624, "name": "Protein - Fluids", "mrp": 250, "b2b": 100 },
  { "id": 625, "name": "Protein - Random Urine", "mrp": 250, "b2b": 100 },
  { "id": 626, "name": "Protein C", "mrp": 3600, "b2b": 1600 },
  { "id": 627, "name": "Protein Electrophoresis - 24 hrs Urine", "mrp": 2500, "b2b": 1200 },
  { "id": 628, "name": "Protein Electrophoresis - Serum", "mrp": 1800, "b2b": 600 },
  { "id": 629, "name": "Protein Electrophoresis - Urine", "mrp": 1800, "b2b": 600 },
  { "id": 630, "name": "Protein S", "mrp": 3600, "b2b": 1600 },
  { "id": 631, "name": "Protein Total", "mrp": 250, "b2b": 100 },

  { "id": 638, "name": "Random Urine Sugar", "mrp": 50, "b2b": 20 },
  { "id": 639, "name": "RBC Folate", "mrp": 2500, "b2b": 900 },
  { "id": 640, "name": "RDW", "mrp": 100, "b2b": 60 },
  { "id": 641, "name": "Renal Biopsy", "mrp": 4500, "b2b": 2400 },
  { "id": 642, "name": "Renin Activity", "mrp": 6700, "b2b": 3100 },
  { "id": 643, "name": "Renin Direct", "mrp": 1650, "b2b": 500 },
  { "id": 644, "name": "Respiratory Panel - 4", "mrp": 4500, "b2b": 2800 },
  { "id": 645, "name": "Reticulocyte Count", "mrp": 450, "b2b": 100 },

  { "id": 654, "name": "Salmonella Typhi Dot IGG", "mrp": 400, "b2b": 320 },
  { "id": 655, "name": "Salmonella Typhi Dot IGM", "mrp": 200, "b2b": 240 },
  { "id": 656, "name": "SARS COV2 Spike Antibody Quantitative", "mrp": 1800, "b2b": 1000 },
  { "id": 657, "name": "SARS-CoV-2 (COVID-19) RT PCR", "mrp": 1000, "b2b": 500 },
  { "id": 658, "name": "SARS-CoV-2 Antibody IgG", "mrp": 1200, "b2b": 500 },
  { "id": 659, "name": "SARS-CoV-2 Antibody Total", "mrp": 1200, "b2b": 500 },
  { "id": 660, "name": "SARS-CoV-2 Three Genes Multiplex RT PCR", "mrp": 1500, "b2b": 800 },
  { "id": 661, "name": "SCL-70 Antibody", "mrp": 1700, "b2b": 750 },

  { "id": 670, "name": "Slides and Blocks", "mrp": 300, "b2b": 200 },
  { "id": 671, "name": "Slit Skin for AFB", "mrp": 300, "b2b": 180 },
  { "id": 672, "name": "Sm Antibody Smith Antibody Serum", "mrp": 4500, "b2b": 2100 },
  { "id": 673, "name": "Smear for Fungal Elements", "mrp": 300, "b2b": 180 },
  { "id": 674, "name": "Smear for Trophozoites", "mrp": 700, "b2b": 300 },
  { "id": 675, "name": "SNP Microarray High Resolution 750k", "mrp": 28000, "b2b": 19000 },
  { "id": 676, "name": "Sodium", "mrp": 200, "b2b": 90 },
  { "id": 677, "name": "Sodium -Urine-Random", "mrp": 250, "b2b": 90 },
  { "id": 678, "name": "Sodium-24 hrs Urine", "mrp": 250, "b2b": 60 },
  { "id": 679, "name": "Sperm DNA Fragmentation.", "mrp": 9500, "b2b": 4000 },
  { "id": 680, "name": "Spinocerebellar Ataxia SCA 1", "mrp": 6000, "b2b": 3000 },
  { "id": 681, "name": "Spinocerebellar Ataxia SCA 10", "mrp": 6000, "b2b": 3000 },
  { "id": 682, "name": "Spinocerebellar Ataxia SCA 12", "mrp": 6000, "b2b": 3000 },
  { "id": 683, "name": "Spinocerebellar Ataxia SCA 17", "mrp": 6000, "b2b": 3000 },
  { "id": 684, "name": "Spinocerebellar Ataxia SCA 2", "mrp": 6000, "b2b": 3000 },
  { "id": 685, "name": "Spinocerebellar Ataxia SCA 3", "mrp": 6000, "b2b": 3000 },
  { "id": 686, "name": "Spinocerebellar Ataxia SCA 6", "mrp": 6000, "b2b": 3000 },
  { "id": 687, "name": "Spinocerebellar Ataxia SCA 7", "mrp": 6000, "b2b": 3000 },
  { "id": 688, "name": "Spinocerebellar Ataxia SCA 8", "mrp": 6000, "b2b": 3000 },
  { "id": 689, "name": "Spinocerebellar Ataxia (SCA) Panel of three SCA's", "mrp": 10000, "b2b": 5500 },
  { "id": 690, "name": "Spinocerebellar Ataxia (SCA) Panel 1,2,3,6,7,12", "mrp": 15000, "b2b": 8500 },
  { "id": 691, "name": "Spinocerebellar Ataxia (SCA) Panel 1,2,3,6,7,8,10,12,17", "mrp": 18000, "b2b": 10500 },
  { "id": 692, "name": "Spot Urine Uric Acid", "mrp": 200, "b2b": 120 },
  { "id": 693, "name": "Sputum for Malignant Cells", "mrp": 400, "b2b": 150 },
  { "id": 694, "name": "Squamous Cell Carcinoma Antigen(SCCA)", "mrp": 9200, "b2b": 4500 },
  { "id": 695, "name": "Stone Analysis", "mrp": 1100, "b2b": 500 },
  { "id": 696, "name": "Stool For Fat Globulins", "mrp": 1500, "b2b": 60 },
  { "id": 697, "name": "Stool for Occult blood.", "mrp": 300, "b2b": 100 },
  { "id": 698, "name": "Stool PH & Reducing Substanses", "mrp": 250, "b2b": 100 },
  { "id": 699, "name": "Stool Routine Examination", "mrp": 150, "b2b": 75 },

  { "id": 708, "name": "Thrombophilia Mutation Screening Panel", "mrp": 13000, "b2b": 7500 },
  { "id": 709, "name": "Thyroglobulin(TG)", "mrp": 2000, "b2b": 800 },
  { "id": 710, "name": "Thyroid Stimulating Hormone (TSH)", "mrp": 250, "b2b": 40 },
  { "id": 711, "name": "Thyroxin Binding Globulin", "mrp": 3600, "b2b": 1900 },
  { "id": 712, "name": "Thyroxine - Total (TT4)", "mrp": 200, "b2b": 75 },
  { "id": 713, "name": "Tissue Transglutaminase Antibody - IgA", "mrp": 2400, "b2b": 900 },
  { "id": 714, "name": "Tissue Transglutaminase Antibody - IgG", "mrp": 2400, "b2b": 1000 },
  { "id": 715, "name": "TLC and DLC", "mrp": 150, "b2b": 90 },
  { "id": 716, "name": "TNF Alpha Tumour necrosis", "mrp": 7900, "b2b": 3800 },
  { "id": 717, "name": "Total IgE", "mrp": 1000, "b2b": 250 },
  { "id": 718, "name": "Total Iron Binding Capacity (TIBC)", "mrp": 350, "b2b": 100 },
  { "id": 719, "name": "Total WBC count (Leucocyte)", "mrp": 150, "b2b": 85 },
  { "id": 720, "name": "Toxoplasma DNA PCR", "mrp": 6500, "b2b": 3200 },
  { "id": 721, "name": "Toxoplasma gondii - IgG", "mrp": 550, "b2b": 200 },
  { "id": 722, "name": "Toxoplasma gondii - IgM", "mrp": 550, "b2b": 200 },
  { "id": 723, "name": "TPMT Enzyme Activity (Thiopurine Methyl Transferase)", "mrp": 9800, "b2b": 5050 },

  { "id": 732, "name": "Troponin I-Qualitative", "mrp": 2000, "b2b": 800 },
  { "id": 733, "name": "Troponin I-Quantitative", "mrp": 2200, "b2b": 900 },
  { "id": 734, "name": "TSH Receptor Antibodies Levels", "mrp": 3200, "b2b": 1400 },
  { "id": 735, "name": "TSH-Ultra Sensitive", "mrp": 250, "b2b": 150 },
  { "id": 736, "name": "Tzanck smear (Microscopic examination)", "mrp": 1900, "b2b": 650 },
  { "id": 737, "name": "U1RNP Antibodies Serum", "mrp": 2950, "b2b": 1400 },
  { "id": 738, "name": "UGT1A1 Gene Polymorphism (Gilberts Syndrome)", "mrp": 9200, "b2b": 4500 },
  { "id": 739, "name": "Unconjugated estriol(E3)", "mrp": 900, "b2b": 550 },

  { "id": 748, "name": "Urine for Dysmorphic RBC", "mrp": 700, "b2b": 200 },
  { "id": 749, "name": "Urine for Eosinophil Count", "mrp": 150, "b2b": 85 },
  { "id": 750, "name": "Urine For Fat Globules", "mrp": 450, "b2b": 150 },
  { "id": 751, "name": "Urine for Ketone Bodies", "mrp": 100, "b2b": 60 },
  { "id": 752, "name": "Urine for Spermatozoa", "mrp": 300, "b2b": 100 },
  { "id": 753, "name": "Urine Protein/Creatinine Ratio (SPOT)", "mrp": 250, "b2b": 150 },
  { "id": 754, "name": "Urine Reducing Substanses", "mrp": 500, "b2b": 100 },
  { "id": 755, "name": "Urobilinogen - Urine", "mrp": 100, "b2b": 60 },
  { "id": 756, "name": "Valporic Acid (Sodium Valproate)", "mrp": 1100, "b2b": 500 },
  { "id": 757, "name": "Varicella Zoster IgG", "mrp": 2100, "b2b": 900 },
  { "id": 758, "name": "Varicella Zoster IgM", "mrp": 2100, "b2b": 900 },
  { "id": 759, "name": "VDRL- Syphilis Antibodies", "mrp": 250, "b2b": 150 },
  { "id": 760, "name": "VDRL Titre", "mrp": 300, "b2b": 150 },
  { "id": 761, "name": "Vitamin - A", "mrp": 3800, "b2b": 1650 },
  { "id": 762, "name": "Vitamin - B1", "mrp": 1600, "b2b": 700 },
  { "id": 763, "name": "Vitamin - B12", "mrp": 1000, "b2b": 180 },
  { "id": 764, "name": "Vitamin - C", "mrp": 6000, "b2b": 2750 },
  { "id": 765, "name": "Vitamin - E ( Tocopherol ) - Serum", "mrp": 3500, "b2b": 1850 },
  { "id": 766, "name": "VITAMIN B2 / RIBOFLAVIN", "mrp": 3500, "b2b": 1500 },
  { "id": 767, "name": "Vitamin B5", "mrp": 2400, "b2b": 1100 },
  { "id": 768, "name": "VITAMIN B6/P5P", "mrp": 3650, "b2b": 1800 },
  { "id": 769, "name": "VITAMIN B7", "mrp": 1900, "b2b": 800 },
  { "id": 770, "name": "Vitamin K", "mrp": 3300, "b2b": 1750 },
  { "id": 771, "name": "Vitamin K1", "mrp": 9400, "b2b": 5200 }
  
];

// ─── State ────────────────────────────────────────────────────────────────────
const selected   = new Set();   // Set of test IDs checked in Step 1
let   billItems  = [];          // [{ test, finalPrice }] in the bill
let   visibleCount = 10;        // how many rows shown in the test list
let   marginVisible = false;    // toggle for technician margin

// ─── DOM refs ─────────────────────────────────────────────────────────────────
const tableBody       = document.getElementById("testTableBody");
const searchInput     = document.getElementById("searchInput");
const selectedCountEl = document.getElementById("selectedCount");
const totalMrpEl      = document.getElementById("totalMrp");
const totalMarginEl   = document.getElementById("totalMargin");
const addToBillBtn    = document.getElementById("addToBillBtn");
const loadMoreBar     = document.getElementById("loadMoreBar");
const loadMoreBtn     = document.getElementById("loadMoreBtn");
const showingCountEl  = document.getElementById("showingCount");
const marginPanel     = document.getElementById("marginPanel");
const marginToggleBtn = document.getElementById("marginToggleBtn");
const billBody        = document.getElementById("billBody");
const grandTotalEl    = document.getElementById("grandTotal");
const billTotalMrpEl  = document.getElementById("billTotalMrp");
const globalDiscountEl= document.getElementById("globalDiscount");
const techMarginFinalEl = document.getElementById("techMarginFinal");
const marginSummaryRow  = document.getElementById("marginSummaryRow");
const printBtn        = document.getElementById("printBtn");

// ─── Helpers ──────────────────────────────────────────────────────────────────
function money(v) {
  return "₹" + Number(v).toFixed(2);
}

function techMargin(test) {
  return test.mrp - test.b2b;  // margin per test
}

function getGlobalDiscount() {
  return Math.max(0, Number(globalDiscountEl.value) || 0);
}

// ─── Step 1: Test Selection ───────────────────────────────────────────────────
function getFiltered() {
  const term = searchInput.value.trim().toLowerCase();
  return term
    ? medpathtests.filter(t => t.name.toLowerCase().includes(term))
    : medpathtests;
}

function renderTests() {
  const filtered = getFiltered();
  const slice    = filtered.slice(0, visibleCount);

  if (!filtered.length) {
    tableBody.innerHTML = `<tr><td colspan="3" class="bill-empty">No tests found.</td></tr>`;
    loadMoreBar.hidden  = true;
    return;
  }

  tableBody.innerHTML = slice.map(test => {
    const isChecked = selected.has(test.id);
    return `
      <tr class="${isChecked ? "row-selected" : ""}">
        <td>
          <input class="checkbox test-check" type="checkbox"
                 data-id="${test.id}" ${isChecked ? "checked" : ""}>
        </td>
        <td class="test-name">${test.name}</td>
        <td class="right price">₹${test.mrp.toLocaleString("en-IN")}</td>
      </tr>`;
  }).join("");

  // Load More visibility
  if (filtered.length > visibleCount) {
    loadMoreBar.hidden   = false;
    showingCountEl.textContent =
      `Showing ${slice.length} of ${filtered.length} tests`;
  } else {
    loadMoreBar.hidden   = true;
  }

  // Attach checkbox listeners
  tableBody.querySelectorAll(".test-check").forEach(box => {
    box.addEventListener("change", e => {
      const id = Number(e.target.dataset.id);
      if (e.target.checked) selected.add(id);
      else selected.delete(id);
      updateSelectionSummary();
      renderTests();
    });
  });
}

function updateSelectionSummary() {
  const chosen    = medpathtests.filter(t => selected.has(t.id));
  const sumMrp    = chosen.reduce((s, t) => s + t.mrp, 0);
  const sumMargin = chosen.reduce((s, t) => s + techMargin(t), 0);

  selectedCountEl.textContent = `${chosen.length} selected`;
  totalMrpEl.textContent      = money(sumMrp);
  totalMarginEl.textContent   = money(sumMargin);
  addToBillBtn.disabled       = chosen.length === 0;
}

function getDiscountPct() {
  // Returns a value between 0 and 100
  const raw = Number(globalDiscountEl.value) || 0;
  return Math.min(100, Math.max(0, raw));
}

// ─── Step 2: Bill ─────────────────────────────────────────────────────────────
function renderBill() {
  if (!billItems.length) {
    billBody.innerHTML = `<tr><td colspan="4" class="bill-empty">Select tests above and click "Add to Bill".</td></tr>`;
    billTotalMrpEl.textContent    = money(0);
    document.getElementById("billDiscountAmt").textContent = money(0);
    grandTotalEl.textContent      = money(0);
    techMarginFinalEl.textContent = money(0);
    printBtn.disabled = true;
    return;
  }

  printBtn.disabled = false;

  billBody.innerHTML = billItems.map((item, i) => `
    <tr>
      <td>${i + 1}</td>
      <td class="test-name">${item.test.name}</td>
      <td class="right">₹${item.test.mrp.toLocaleString("en-IN")}</td>
      <td class="right"><strong id="finalPrice_${i}">₹${item.test.mrp.toLocaleString("en-IN")}</strong></td>
    </tr>`).join("");

  updateBillTotals();
}

function updateBillTotals() {
  if (!billItems.length) return;

  const sumMrp    = billItems.reduce((s, it) => s + it.test.mrp, 0);
  const sumB2b    = billItems.reduce((s, it) => s + it.test.b2b, 0);
  const pct       = getDiscountPct();                    // e.g. 10 means 10%
  const discAmt   = sumMrp * (pct / 100);               // ₹ amount discounted
  const finalAmt  = sumMrp - discAmt;                   // amount payable

  // Update each row's final price (each row discounted by same %)
  billItems.forEach((item, i) => {
    const rowFinal = item.test.mrp * (1 - pct / 100);
    const cell = document.getElementById(`finalPrice_${i}`);
    if (cell) cell.textContent =
      `₹${rowFinal.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  });

  // Technician margin after discount = gross margin − discount given
  const techMarginAmt = Math.max(0, sumMrp - sumB2b - discAmt);

  billTotalMrpEl.textContent    = money(sumMrp);
  document.getElementById("billDiscountAmt").textContent = `− ${money(discAmt)}`;
  grandTotalEl.textContent      = money(finalAmt);
  techMarginFinalEl.textContent = money(techMarginAmt);
}

// ─── Wire-up ──────────────────────────────────────────────────────────────────

// Search – reset pagination on new search
searchInput.addEventListener("input", () => {
  visibleCount = 10;
  renderTests();
});

// Load More
loadMoreBtn.addEventListener("click", () => {
  visibleCount += 10;
  renderTests();
});

// Clear All selection
document.getElementById("clearAllBtn").addEventListener("click", () => {
  selected.clear();
  updateSelectionSummary();
  renderTests();
});

// Toggle technician margin visibility
marginToggleBtn.addEventListener("click", () => {
  marginVisible = !marginVisible;
  marginPanel.hidden        = !marginVisible;
  marginSummaryRow.hidden   = !marginVisible;
  marginToggleBtn.textContent = marginVisible ? "Hide Margin" : "Your Margin";
});

// Add to Bill
addToBillBtn.addEventListener("click", () => {
  const currentIds = new Set(billItems.map(it => it.test.id));
  medpathtests
    .filter(t => selected.has(t.id) && !currentIds.has(t.id))
    .forEach(t => billItems.push({ test: t }));

  selected.clear();
  updateSelectionSummary();
  renderTests();
  renderBill();
  document.querySelector(".bill-card").scrollIntoView({ behavior: "smooth" });
});

// Global discount – live update
globalDiscountEl.addEventListener("input", updateBillTotals);

// Print
printBtn.addEventListener("click", () => window.print());

// ─── Invoice meta + init ──────────────────────────────────────────────────────
(function init() {
  const now = new Date();
  document.getElementById("invoiceDate").textContent =
    now.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
  const stamp = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, "0"),
    String(now.getDate()).padStart(2, "0")
  ].join("");
  document.getElementById("invoiceNo").textContent =
    `MD-${stamp}-${Math.floor(1000 + Math.random() * 9000)}`;

  renderTests();
  updateSelectionSummary();
  renderBill();
})();

// ─── Price Editor (Technician) ────────────────────────────────────────────────

// Storage key for session persistence (localStorage)
const OVERRIDE_KEY = "meditest_price_overrides";

// Original defaults snapshot taken once, before any runtime edits
const originalPrices = {};
medpathtests.forEach(t => { originalPrices[t.id] = { mrp: t.mrp, b2b: t.b2b }; });

// Pending edits while the modal is open: plain object keyed by test id
let pendingEdits = {};

// Apply any previously-saved overrides on page load
(function applyStoredOverrides() {
  try {
    const stored = JSON.parse(localStorage.getItem(OVERRIDE_KEY) || "{}");
    medpathtests.forEach(t => {
      if (stored[t.id]) {
        t.mrp = stored[t.id].mrp;
        t.b2b = stored[t.id].b2b;
      }
    });
  } catch (e) { /* ignore corrupt storage */ }
})();

// ── Modal DOM refs ────────────────────────────────────────────────────────────
const editModal       = document.getElementById("editModal");
const editSearchInput = document.getElementById("editSearchInput");
const editTableBody   = document.getElementById("editTableBody");
const editMatchCount  = document.getElementById("editMatchCount");

// ── Open / Close ──────────────────────────────────────────────────────────────
function openEditModal() {
  pendingEdits = {};
  medpathtests.forEach(t => { pendingEdits[t.id] = { mrp: t.mrp, b2b: t.b2b }; });
  editSearchInput.value = "";
  editModal.hidden = false;
  document.body.style.overflow = "hidden";
  renderEditTable();
  editSearchInput.focus();
}

function closeEditModal() {
  editModal.hidden = true;
  document.body.style.overflow = "";
}

// ── Render editable table ─────────────────────────────────────────────────────
function renderEditTable() {
  const term = editSearchInput.value.trim().toLowerCase();
  const list = term
    ? medpathtests.filter(t => t.name.toLowerCase().includes(term))
    : medpathtests;

  editMatchCount.textContent = term
    ? `${list.length} match${list.length !== 1 ? "es" : ""}`
    : `${medpathtests.length} tests`;

  if (!list.length) {
    editTableBody.innerHTML = `<tr><td colspan="4" class="bill-empty">No tests found.</td></tr>`;
    return;
  }

  editTableBody.innerHTML = list.map(t => {
    const ed       = pendingEdits[t.id];
    const orig     = originalPrices[t.id];
    const modified = ed.mrp !== orig.mrp || ed.b2b !== orig.b2b;
    const margin   = ed.mrp - ed.b2b;
    return `
      <tr class="${modified ? "row-modified" : ""}" data-id="${t.id}">
        <td class="test-name-cell">
          ${t.name}${modified ? "<small>edited</small>" : ""}
        </td>
        <td class="right">
          <input class="price-input edit-mrp ${ed.mrp !== orig.mrp ? "changed" : ""}"
                 type="number" min="0" step="1"
                 value="${ed.mrp}" data-id="${t.id}" data-field="mrp">
        </td>
        <td class="right">
          <input class="price-input edit-b2b ${ed.b2b !== orig.b2b ? "changed" : ""}"
                 type="number" min="0" step="1"
                 value="${ed.b2b}" data-id="${t.id}" data-field="b2b">
        </td>
        <td class="right margin-cell ${margin < 0 ? "negative" : ""}" id="margin_${t.id}">
          \u20B9${margin.toLocaleString("en-IN")}
        </td>
      </tr>`;
  }).join("");

  // Live-update margin & badge as user types
  editTableBody.querySelectorAll(".price-input").forEach(input => {
    input.addEventListener("input", e => {
      const id    = Number(e.target.dataset.id);
      const field = e.target.dataset.field;
      const val   = Math.max(0, Number(e.target.value) || 0);
      pendingEdits[id][field] = val;

      const orig = originalPrices[id];
      e.target.classList.toggle("changed", pendingEdits[id][field] !== orig[field]);

      // Live margin
      const margin = pendingEdits[id].mrp - pendingEdits[id].b2b;
      const mCell  = document.getElementById(`margin_${id}`);
      if (mCell) {
        mCell.textContent = `\u20B9${margin.toLocaleString("en-IN")}`;
        mCell.classList.toggle("negative", margin < 0);
      }

      // Row modified highlight + badge
      const row        = e.target.closest("tr");
      const anyChanged = pendingEdits[id].mrp !== orig.mrp || pendingEdits[id].b2b !== orig.b2b;
      row.classList.toggle("row-modified", anyChanged);
      const nameCell = row.querySelector(".test-name-cell");
      const badge    = nameCell.querySelector("small");
      if (anyChanged && !badge) {
        nameCell.insertAdjacentHTML("beforeend", "<small>edited</small>");
      } else if (!anyChanged && badge) {
        badge.remove();
      }
    });
  });
}

// ── Save + Download updated app.js ───────────────────────────────────────────
function saveAndDownload() {
  // 1. Apply pending edits to the live array
  medpathtests.forEach(t => {
    t.mrp = pendingEdits[t.id].mrp;
    t.b2b = pendingEdits[t.id].b2b;
  });

  // 2. Persist to localStorage so changes survive a reload even before file is replaced
  const overrides = {};
  medpathtests.forEach(t => {
    const orig = originalPrices[t.id];
    if (t.mrp !== orig.mrp || t.b2b !== orig.b2b) {
      overrides[t.id] = { mrp: t.mrp, b2b: t.b2b };
    }
  });
  localStorage.setItem(OVERRIDE_KEY, JSON.stringify(overrides));

  // 3. Build the updated array literal text
  const newArray =
    "const medpathtests = [\n" +
    medpathtests.map(t =>
      `  { "id": ${t.id}, "name": ${JSON.stringify(t.name)}, "mrp": ${t.mrp}, "b2b": ${t.b2b} }`
    ).join(",\n") +
    "\n];";

  // 4. Fetch the current app.js source, splice in new array, trigger download
  fetch("app.js")
    .then(r => r.text())
    .then(src => {
      const updated = src.replace(/const medpathtests\s*=\s*\[[\s\S]*?\];/, newArray);
      triggerDownload("app.js", updated);
      finishSave();
    })
    .catch(() => {
      // file:// protocol blocks fetch — build from scratch instead
      finishSave(true);
    });
}

function triggerDownload(filename, content) {
  const blob = new Blob([content], { type: "text/javascript" });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement("a");
  a.href = url; a.download = filename;
  document.body.appendChild(a); a.click();
  setTimeout(() => { URL.revokeObjectURL(url); a.remove(); }, 1000);
}

function finishSave(fetchFailed) {
  renderTests();
  updateSelectionSummary();
  renderBill();
  closeEditModal();
  if (fetchFailed) {
    alert(
      "✅ Prices updated for this session (localStorage).\n\n" +
      "To download the updated app.js, open the page through a local server\n" +
      "(e.g. VS Code Live Server) instead of directly as a file:// URL."
    );
  } else {
    alert(
      "✅ app.js downloaded!\n\n" +
      "Replace the existing app.js in your project folder with the\n" +
      "downloaded file to make the price changes permanent."
    );
  }
}

// ── Reset all prices to original defaults ─────────────────────────────────────
function resetAllPrices() {
  if (!confirm("Reset ALL test prices to their original defaults?\nThis cannot be undone.")) return;
  medpathtests.forEach(t => {
    t.mrp = originalPrices[t.id].mrp;
    t.b2b = originalPrices[t.id].b2b;
  });
  localStorage.removeItem(OVERRIDE_KEY);
  renderTests();
  updateSelectionSummary();
  renderBill();
  closeEditModal();
  alert("↩ All prices have been reset to their original defaults.");
}

// ── Wire-up ───────────────────────────────────────────────────────────────────
document.getElementById("editPricesBtn").addEventListener("click", openEditModal);
document.getElementById("closeEditModal").addEventListener("click", closeEditModal);
document.getElementById("closeEditModalFooter").addEventListener("click", closeEditModal);
document.getElementById("saveDownloadBtn").addEventListener("click", saveAndDownload);
document.getElementById("resetAllBtn").addEventListener("click", resetAllPrices);

// Close on backdrop click
editModal.addEventListener("click", e => { if (e.target === editModal) closeEditModal(); });

// Close on Escape
document.addEventListener("keydown", e => { if (e.key === "Escape" && !editModal.hidden) closeEditModal(); });

// Search inside modal
editSearchInput.addEventListener("input", renderEditTable);
