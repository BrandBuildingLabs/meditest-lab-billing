const medpathtests = [
  { "id": 1, "name": "1 25 Di Hydroxy Vitamin D( Vitamin D3 )", "mrp": 3000, "b2b": 1500 },
  { "id": 2, "name": "17-Hydroxy Progesterone (17-OHP)", "mrp": 1500, "b2b": 600 },
  { "id": 3, "name": "17-Ketosteroids-24hrs Urine", "mrp": 5500, "b2b": 2800 },
  { "id": 4, "name": "24 hrs Urinary Corsol/Creanine Rao", "mrp": 1500, "b2b": 900 },
  { "id": 5, "name": "24 Hrs Urine Proen / Creanine Rao", "mrp": 600, "b2b": 150 },
  { "id": 6, "name": "24 Hrs Urine - Uric Acid", "mrp": 250, "b2b": 100 },
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
  { "id": 904, "name": "MedTrack Health Profile", "mrp": 16500, "b2b": 8900 }
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


