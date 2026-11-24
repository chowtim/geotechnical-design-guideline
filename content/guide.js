var guide = {
  title: "Design Procedures for Desk Study, Excavation and Lateral Support (ELS) Works, and Soil Nail Design",
  subtitle: "Hong Kong practice",
  disclaimer: "Developed by Martin Chow. This suggested design guideline is for young engineers. It is not guidance from the Geotechnical Engineering Office, the Civil Engineering and Development Department, or the Buildings Department. The current versions of the documents named below govern. Where this guideline and those documents differ, follow the documents.",
  opening: "This suggested design guideline is for young geotechnical engineers in Hong Kong. Start with the desk study. ELS design and soil nail design both begin there. Follow the current documents named here when they differ from this guideline.",
  documentsNote: "Each name opens the current official file. Where a procedure uses a table or figure, this page names it and states the value used in the check. The printed plate stays in the official file.",
  standards: [
    { label: "Geoguide 1, Guide to Retaining Wall Design", href: "https://www.cedd.gov.hk/filemanager/eng/content_106/eg1_20200601.pdf" },
    { label: "Geoguide 5, Guide to Slope Maintenance", href: "https://www.cedd.gov.hk/filemanager/eng/content_113/eg5_2023.11.pdf" },
    { label: "Geoguide 7, Guide to Soil Nail Design and Construction", href: "https://www.cedd.gov.hk/filemanager/eng/content_117/eg7_2023.11.21.pdf" },
    { label: "Geotechnical Manual for Slopes", href: "https://www.cedd.gov.hk/filemanager/eng/content_91/egms.pdf" },
    { label: "GEO Publication No. 1/2006, Foundation Design and Construction", href: "https://www.cedd.gov.hk/filemanager/eng/content_148/ep1_2006.pdf" },
    { label: "GEO Publication No. 1/2023, Deep Excavation Design and Construction", href: "https://www.cedd.gov.hk/filemanager/eng/content_1024/ep1_2023.pdf" },
    { label: "Code of Practice for Foundations 2017 (2024 Edition)", href: "https://www.bd.gov.hk/doc/en/resources/codes-and-references/code-and-design-manuals/FoundationCode2017.pdf" },
    { label: "GEO Publications", href: "https://www.cedd.gov.hk/eng/publications/geo/index.html" },
    { label: "PNAP APP-137, Ground-borne Vibration and Ground Settlement arising from Pile Foundation and Excavation and Lateral Support Works", href: "https://www.bd.gov.hk/doc/en/resources/codes-and-references/practice-notes-and-circular-letters/pnap/APP/APP137.pdf" },
    { label: "PNAP APP-30, Geotechnical Control on Developments in Mid-levels Scheduled Area", href: "https://www.bd.gov.hk/doc/en/resources/codes-and-references/practice-notes-and-circular-letters/pnap/APP/APP030.pdf" },
    { label: "PNAP APP-61, Geotechnical Control on Developments in Area Numbers 2 and 4 of the Scheduled Areas", href: "https://www.bd.gov.hk/doc/en/resources/codes-and-references/practice-notes-and-circular-letters/pnap/APP/APP061.pdf" },
    { label: "PNAP APP-24, Railway Protection under Railways Ordinance, Mass Transit Railway (Land Resumption and Related Provisions) Ordinance and Area Number 3 of the Scheduled Areas in Schedule 5 to the Buildings Ordinance", href: "https://www.bd.gov.hk/doc/en/resources/codes-and-references/practice-notes-and-circular-letters/pnap/APP/APP024.pdf" },
    { label: "PNAP APP-62, Protection of Sewage and Drainage Tunnels", href: "https://www.bd.gov.hk/doc/en/resources/codes-and-references/practice-notes-and-circular-letters/pnap/APP/APP062.pdf" },
    { label: "PNAP APP-109, Geotechnical Manual for Slopes Guidance on Interpretation and Updating", href: "https://www.bd.gov.hk/doc/en/resources/codes-and-references/practice-notes-and-circular-letters/pnap/APP/APP109.pdf" }
  ],
  scheduledAreas: {
    heading: "Scheduled Areas under the Buildings Ordinance",
    note: "These are the Scheduled Areas in Schedule 5 to the Buildings Ordinance. The names and numbers below follow the Buildings Department list. The practice note is the current PNAP that tells you what extra control applies in that area. The plans that show the boundary are on the Buildings Department page.",
    sourceLabel: "Buildings Department, Schedule 5",
    sourceUrl: "https://www.bd.gov.hk/en/resources/codes-and-references/scheduled-areas/index.html",
    headers: ["No.", "Schedule 5", "Practice note"],
    rows: [
      ["1", "Mid-Levels Area", "APP-30"],
      ["2", "North-Western Part of the New Territories", "APP-61"],
      ["3(a)", "Railway Protection Areas along the Mass Transit Railway lines", "APP-24"],
      ["3(b)", "Railway Protection Areas along the railway lines of the Kowloon-Canton Railway Corporation", "APP-24"],
      ["4", "Ma On Shan Area", "APP-61"],
      ["5", "Sewage Tunnel Protection Areas", "APP-62"]
    ]
  },
  procedures: [
    {
      id: "desk-study",
      label: "Desk study",
      title: "1. Desk study",
      lead: "Do the desk study before you plan the ground investigation, and before you design ELS works or a soil nail. Read what is already known. Write what is still unknown. Do not assign design strength or a factor of safety in this step.",
      sections: [
        {
          id: "desk-study-objectives",
          title: "1.1 Do this before the design",
          blocks: [{
            kind: "prose",
            text: "ELS design needs the desk study to name the ground beside the excavation, the groundwater, and the buildings, roads, and pipes the works can move. Soil nail design needs it to name the slope or wall, the ground the nails will pass through, and the old filling, cutting, and seepage above the feature. Both designs start from the same note. If that note is missing, stop and write it."
          }]
        },
        {
          id: "desk-study-sources",
          title: "1.2 Work through the records",
          blocks: [{
            kind: "steps",
            items: [
              "Mark the site, the works, and what they can affect.",
              "Read the geological map and memoir.",
              "Read GIU boreholes and trial pits. Do not turn them into design strengths.",
              "Read the aerial photographs in date order.",
              "List the slopes and walls, and who maintains them.",
              "List past landslides and GEO incident reports.",
              "Collect as-built foundations and utility plans.",
              "Check Schedule 5 and the practice note for that area.",
              "Draw one ground-model section. Mark what no borehole has proved.",
              "List the hazards and the ground-investigation questions. Stop."
            ]
          }]
        },
        {
          id: "desk-study-outputs",
          title: "1.3 What each source is for",
          blocks: [{
            kind: "table",
            headers: ["Question", "Where to look", "What to write down"],
            rows: [
              ["What ground does the published geology expect?", "1:20 000 geological map and memoir, and the Geotechnical Area Study Programme maps", "Rock, superficial deposits, and the constraints those maps already mark"],
              ["What has a borehole already proved?", "Geotechnical Information Unit records, and earlier geotechnical reports for this site or the next site", "Layers, thickness, and measured water levels. Keep assumed values out of this column"],
              ["How has the ground surface changed?", "Aerial photographs, in date order", "Year of each flight, and the filling, cutting, shoreline, or scar you can see"],
              ["Which slopes and walls already exist?", "Slope Information System, Slope Maintenance Responsibility Information System, and earlier Stage 3 studies", "Feature number, height, angle, consequence, maintenance party, and a factor of safety only if an earlier study states one"],
              ["Where have landslides already occurred?", "Enhanced Natural Terrain Landslide Inventory, Natural Terrain Landslide Inventory, and GEO incident reports", "Location, date, and the material the record names"],
              ["What can the works damage?", "Buildings Department, Highways Department, Drainage Services Department, and Water Supplies Department as-built drawings, plus utility plans", "Foundations, roads, pipes, and reserves inside the influence of the works"],
              ["Does the site fall in a Scheduled Area?", "Schedule 5 to the Buildings Ordinance, and the practice note named beside that area on this page", "The area number, including 3(a) or 3(b), or a statement that the site is outside Schedule 5"]
            ]
          }]
        },
        {
          id: "desk-study-documentation",
          title: "1.4 Walk the site, then file the note",
          blocks: [
            {
              kind: "prose",
              text: "Walk the site after you have read the records. Check that the slopes, walls, seepage, and signs of filling match what the records say. Photograph what the records miss. A walk does not replace the records."
            },
            {
              kind: "list",
              items: [
                "A location plan and the geological map extract.",
                "A history note that names the aerial-photograph years you used.",
                "The feature table and the landslide list from the step above.",
                "One ground-model section that separates proved layers from assumed layers.",
                "The buildings, roads, and pipes the works can affect.",
                "The gaps, and the boreholes, trial pits, or groundwater monitoring that should close them."
              ]
            },
            {
              kind: "prose",
              text: "Put this note in the report before any design calculation, and cite it from the later sections. If a fact is missing, write that it is missing. Geoguide 2 is the document that governs the site investigation you plan from this note."
            }
          ]
        }
      ]
    },
    {
      id: "els",
      label: "ELS",
      title: "2. Design of Excavation and Lateral Support (ELS) Works",
      lead: "ELS design is required whenever temporary excavation is needed for pile caps, basements or deep foundations. The design must demonstrate that the temporary works are safe and that movements and groundwater drawdown will not adversely affect adjacent structures, utilities or roads.",
      sections: [
        {
          id: "els-sequence",
          title: "2.1 Overall design sequence",
          blocks: [{
            kind: "steps",
            items: [
              "Complete the desk study in Section 1. Use it to name the ground, the groundwater, the adjacent structures, and the questions the ground investigation must answer.",
              "Define design sections (critical wall types and open-cut sections).",
              "Establish design soil parameters and groundwater regime.",
              "Select support system (sheet piles + struts / ground anchors / soil nails / open cut).",
              "Check the ultimate limit state, then the serviceability limit state.",
              "Prepare construction sequence and monitoring plan.",
              "Prepare drawings and specifications."
            ]
          }]
        },
        {
          id: "els-parameters",
          title: "2.2 Design parameters",
          blocks: [
            {
              kind: "list",
              items: [
                "Derive bulk unit weight, c′, φ′ from laboratory tests (triaxial, direct shear) and s′–t plots.",
                "Adopt a lower-bound strength from the tests.",
                "Read Ka from Geoguide 1 Figure 18 and Kp from Figure 19, using the δ from Tables 14 and 15. Tables 13, 14 and 15 are stated below. The two charts are not redrawn.",
                "Drained Young’s modulus. GEO Publication No. 1/2023 section 2.2.3, equation (2.1), uses E′ = f × N, with E′ in MPa and N the SPT N value. f is generally 1.0 to 1.5 for fill and alluvium, and 1.5 to 2 for completely and highly decomposed rock. For loose soil, or soft soil with a high fines content, f is usually 1.",
                "Permeability from laboratory tests or published values for seepage analysis.",
                "Take the groundwater regime from the investigation. For ultimate stability, use an adverse level. For settlement caused by dewatering, use the drop from the existing level to the dewatered level.",
                "Surcharge loads applied to the ground (Geoguide 1 or as recommended by the PSE)."
              ]
            },
            {
              kind: "prose",
              text: "Geoguide 1 Table 13. Typical ranges of the angle of skin friction, δs, between granular soil and the construction material. A direct shear test can measure δs. When you choose a value, take account of the roughness of the wall and how it is built. The geotextile range is product specific."
            },
            {
              kind: "table",
              headers: ["Construction material", "Typical δs"],
              rows: [
                ["Smooth concrete, cast with steel formwork", "0.8φ′ to 0.9φ′"],
                ["Rough concrete, cast with timber formwork", "0.9φ′ to 1.0φ′"],
                ["Smooth masonry blocks, dressed granitic or volcanic blocks", "0.5φ′ to 0.7φ′"],
                ["Rough masonry blocks, irregular granitic or volcanic blocks", "0.9φ′ to 1.0φ′"],
                ["Smooth steel, polished", "0.5φ′ to 0.6φ′"],
                ["Rough steel", "0.7φ′ to 0.8φ′"],
                ["Geotextile", "0.5φ′ to 0.9φ′"]
              ]
            },
            {
              kind: "prose",
              text: "Geoguide 1 Table 14. Suggested maximum mobilised wall friction for active earth pressure. A positive δ means the retained soil moves down relative to the wall. These maxima apply only when the wall does not move down relative to that soil. If the wall can settle after backfilling, or it stands on compressible ground, take δ as zero. Also take δ as zero for a soft cohesive soil and for a granular soil with significant vibration. The value used must still satisfy vertical equilibrium of the wall."
            },
            {
              kind: "table",
              headers: ["Type of wall", "Maximum δ"],
              rows: [
                ["Back of a crib wall, gabion wall or reinforced fill structure, and a cantilevered wall embedded entirely in soil", "+φ′/2"],
                ["Virtual back of a reinforced-concrete L-shaped or inverted-T cantilever or counterfort wall", "+φ′/2, or the backfill slope, whichever is smaller"],
                ["Soil-wall interface of a mass-concrete or reinforced-concrete reversed L-shaped cantilever or buttressed wall, and a bored pile wall socketed in rock", "+2φ′/3"]
              ]
            },
            {
              kind: "prose",
              text: "Geoguide 1 Table 15. Suggested maximum mobilised wall friction for passive earth pressure. A negative δ means the soil in front of the wall moves up relative to the wall. δs is the skin friction between the soil and the wall material, from Table 13. For a soft cohesive soil, take δ as zero. Loose soil and dense soil are as defined in Geoguide 3."
            },
            {
              kind: "table",
              headers: ["Type of wall", "Loose soil", "Dense soil"],
              rows: [
                ["Moves horizontally, or settles only very slightly, such as a wall on a relatively incompressible foundation", "0", "−δs/2"],
                ["Sheet wall free to move down relative to the passive soil, such as a wall on soft or loose soil that settles under active earth pressure or inclined anchors", "−2δs/3", "−2δs/3"],
                ["Stability relies on passive soil that may settle under an external load", "0", "0"]
              ]
            },
            {
              kind: "prose",
              text: "Geoguide 1 Figure 18 is the chart of active earth-pressure coefficient Ka for the wall shape and the slope of the retained ground. Figure 19 is the chart of passive earth-pressure coefficient Kp for a vertical wall and sloping ground in front of it. Both charts follow Caquot and Kerisel. Read Ka and Kp for the φ′ and δ of the section. The curves are not redrawn here."
            },
            {
              kind: "links",
              items: [
                { label: "Geoguide 1, Table 14. Active wall friction", href: "https://www.cedd.gov.hk/filemanager/eng/content_106/eg1_20200601.pdf" },
                { label: "Geoguide 1, Table 13 and Table 15. Skin friction and passive wall friction", href: "https://www.cedd.gov.hk/filemanager/eng/content_106/eg1_20200601.pdf" },
                { label: "Geoguide 1, Figure 18. Active earth-pressure coefficients", href: "https://www.cedd.gov.hk/filemanager/eng/content_106/eg1_20200601.pdf" },
                { label: "Geoguide 1, Figure 19. Passive earth-pressure coefficients", href: "https://www.cedd.gov.hk/filemanager/eng/content_106/eg1_20200601.pdf" },
                { label: "GEO Publication No. 1/2023, section 2.2.3, equation (2.1). Drained Young’s modulus", href: "https://www.cedd.gov.hk/filemanager/eng/content_1024/ep1_2023.pdf" }
              ]
            }
          ]
        },
        {
          id: "els-uls",
          title: "2.3 Ultimate limit state",
          blocks: [
            {
              kind: "prose",
              text: "Use the global factor method in GEO Publication No. 1/2023, Table 6.1. Overturning and toe instability take the same factors. Hydraulic failure means piping and uplifting."
            },
            {
              kind: "table",
              headers: ["Check", "Method", "Minimum factor of safety"],
              rows: [
                ["Overturning and toe instability", "Limit equilibrium or a soil-structure analysis", "1.5 in effective stress\n2.0 in total stress"],
                ["Hydraulic failure, piping and uplifting", "Seepage analysis", "1.5"],
                ["Base heave", "Seepage analysis or a simplified check", "1.5"],
                ["Temporary cut slope", "Slope stability analysis", "PNAP APP-109 section 6. Use the factors for new slopes, assessed for the construction period. For most temporary cases the factor is 1.2."]
              ]
            },
            {
              kind: "links",
              items: [
                { label: "GEO Publication No. 1/2023, Table 6.1", href: "https://www.cedd.gov.hk/filemanager/eng/content_1024/ep1_2023.pdf" },
                { label: "PNAP APP-109, section 6, temporary works", href: "https://www.bd.gov.hk/doc/en/resources/codes-and-references/practice-notes-and-circular-letters/pnap/APP/APP109.pdf" }
              ]
            }
          ]
        },
        {
          id: "els-sls",
          title: "2.4 Serviceability limit state",
          blocks: [
            {
              kind: "prose",
              text: "GEO Publication No. 1/2023 uses a factor of unity on the calculated wall deflection and ground movement. The limit is the movement the adjacent structure, utility, or road can accept. Section 8.3 estimates the total ground settlement as three parts. Wall installation is section 8.3.1. Bulk excavation and dewatering is section 8.3.2. Ground settlement due to groundwater drawdown is section 8.3.3. Add the three. Preloading of struts and removal of lateral support are separate checks in sections 8.3.4 and 8.3.5."
            },
            {
              kind: "table",
              headers: ["Check", "Method", "What to show"],
              rows: [
                ["Total ground settlement", "Add the three parts in GEO Publication No. 1/2023 section 8.3. Wall installation. Bulk excavation and dewatering, using Figure 8.3 after Clough and O'Rourke or a deformation analysis. Ground settlement due to groundwater drawdown.", "Settlement at the adjacent structures and utilities. For the drawdown part, use the drop from the existing groundwater level to the dewatered level"],
                ["Effect on adjacent buildings and roads", "Settlement contours and angular distortion", "Comparison with the movement limits agreed for those receivers"]
              ]
            }
          ]
        },
        {
          id: "els-construction",
          title: "2.5 Construction sequence",
          blocks: [
            {
              kind: "prose",
              text: "A stage-by-stage sequence must be defined (typical example from LCK373-type projects):"
            },
            {
              kind: "steps",
              items: [
                "Stage 0 – Install monitoring points and take initial readings.",
                "Stage 1 – Install sheet piles / king posts; pre-grout if required adjacent to sensitive structures; perform pumping test.",
                "Stage 2 onwards – Sequential dewatering → excavation to just below strut level → install waling and strut → next stage.",
                "Final stage – Construct permanent structure, backfill, remove struts and switch off dewatering pump only after permanent works have adequate strength."
              ]
            }
          ]
        },
        {
          id: "els-monitoring",
          title: "2.6 Monitoring and contingency",
          blocks: [
            {
              kind: "prose",
              text: "GEO Publication No. 1/2023 Chapter 10 sets the order as Alert, Alarm, then Action. Alert and Alarm are generally 50% and 75% of the Action level. PNAP APP-137, revised in November 2024, now recommends 5A for settlement and vibration from pile installation works, including installation or extraction of a temporary pile wall. 5A keeps Alert and Alarm, and splits the Action level into Action Levels 1, 2 and 3. The older three-tier set is the 3A approach. Appendix A gives the provisional 5A values. For a sensitive receiver, or where the limit comes from an engineering assessment, use PNAP APP-24 Appendix C, or the limit set by the owner of that receiver."
            },
            {
              kind: "prose",
              text: "For a deeper excavation, GEO Publication No. 1/2023 uses its own five-tier control. Those values are not the Appendix A figures. Cumulative ground settlement is the trigger. Alert is 10 mm. Alarm is 15 mm. Action Level 1 is 20 mm. Action Level 2 is 0.3% of the excavation depth, and not less than 25 mm or more than 60 mm. Action Level 3 is 0.5% of the excavation depth, and not less than 30 mm or more than 100 mm. Agree these values with the parties who maintain the receivers before they go into the monitoring plan."
            },
            {
              kind: "list",
              items: [
                "Instrumentation plan. Inclinometers, standpipes, settlement markers, and vibration monitors inside the assessed influence zone.",
                "Contingency measures. Recharge wells, additional struts, and ground treatment, each tied to the level that triggers it."
              ]
            },
            {
              kind: "links",
              items: [
                { label: "GEO Publication No. 1/2023, Chapter 10, monitoring and AAA", href: "https://www.cedd.gov.hk/filemanager/eng/content_1024/ep1_2023.pdf" },
                { label: "PNAP APP-137, Appendix A, 5A limits for pile installation", href: "https://www.bd.gov.hk/doc/en/resources/codes-and-references/practice-notes-and-circular-letters/pnap/APP/APP137.pdf" },
                { label: "PNAP APP-24, Appendix C, engineering approach for movement limits", href: "https://www.bd.gov.hk/doc/en/resources/codes-and-references/practice-notes-and-circular-letters/pnap/APP/APP024.pdf" }
              ]
            }
          ]
        },
        {
          id: "els-deliverables",
          title: "2.7 Deliverables",
          blocks: [{
            kind: "list",
            items: [
              "Geotechnical report with all calculations (appendices for FREW, SEEP/W, SLOPE/W, settlement).",
              "Construction sequence drawings, section drawings, monitoring plan.",
              "Pumping-test proposal."
            ]
          }]
        }
      ]
    },
    {
      id: "soil-nail",
      label: "Soil nail design",
      title: "3. Soil nail design",
      lead: "A soil nail upgrades a slope by reinforcing the soil where it stands. Geoguide 7 uses closely spaced bars, grouted into the slope, which develop tension as the ground tries to move. That tension carries part of the shear on a potential slip and increases the normal stress on that surface, so the soil can mobilise more shear strength. The nail heads confine the face. The bars tie the active zone, the ground that tends to detach, to the passive zone behind the slip. Drainage and the crest works stay in the same procedure. These steps are for passive soil nails only. The bars are not prestressed, and they carry transient loads, such as the water force from a high groundwater level after heavy rain. A nail that carries a sustained load is covered in Geoguide 7 section 5.12, and it is outside this procedure.",
      sections: [
        {
          id: "slope-sequence",
          title: "3.1 Overall design sequence",
          blocks: [{
            kind: "steps",
            items: [
              "Complete the desk study in Section 1 before you confirm the feature or start the soil nail design.",
              "Confirm the existing condition of the feature (as-built drawings, SIS, Stage 3 reports, site inspection).",
              "Establish design soil parameters and groundwater (including possible perched water).",
              "Define the soil nail design, including raking drains, surface drainage, crest structures, and hard cover.",
              "Perform stability analyses for existing, temporary and permanent conditions.",
              "Design structural elements (soil-nail heads, footpath structures, maintenance access).",
              "Assess impact on adjacent features, DSD pipes, elevated roads and waterworks reserves.",
              "Prepare monitoring plan and maintenance schedule."
            ]
          }]
        },
        {
          id: "slope-nails",
          title: "3.2 Key design steps for soil-nailed slopes",
          blocks: [
            {
              kind: "steps",
              items: [
                "Geological model. Construct critical sections using all available GI (drillholes, trial pits, slope strippings).",
                "Soil parameters. From laboratory tests and s′–t plots. Adopt residual or lower-bound values where appropriate for relict landslides.",
                "Groundwater. Design water table from monitoring records. Consider perched water in fill or colluvium.",
                "Minimum factor of safety. Use Geoguide 7 Table 5.4 for a ten-year return period rainfall.",
                "Nail layout. Take the bar size, length, spacing, and inclination from Geoguide 7 section 5.6.3, set out below. Check pullout with equations (5.1), (5.2), and (5.3) in that section, and with the factors in Table 5.6. Confirm the bond by pullout tests.",
                "Nail head. For an isolated head on a cut slope steeper than 45°, use Geoguide 7 Table 5.7. Figure 5.4 is the alternative sizing method. Figure 5.5 shows typical reinforcement of an isolated head.",
                "Corrosion protection. Use Geoguide 7 section 5.5 and Table 5.1, set out in the next section.",
                "Drainage design. U-channel, stepped channel, catchpits, raking drains, connection to existing systems. Check drainage system capacity for design rainfall with provision for climate change."
              ]
            },
            {
              kind: "table",
              headers: ["Economic consequence", "Consequence-to-life 1", "Consequence-to-life 2", "Consequence-to-life 3"],
              rows: [
                ["A", "1.4", "1.4", "1.4"],
                ["B", "1.4", "1.2", "1.2"],
                ["C", "1.4", "1.2", "Greater than 1.0"]
              ]
            },
            {
              kind: "prose",
              text: "Geoguide 7 Table 5.4 gives these minimum factors for a ten-year return period rainfall. For consequence-to-life category 1, also provide a factor of at least 1.1 under the predicted worst groundwater."
            },
            {
              kind: "prose",
              text: "Geoguide 7 section 5.6.3 gives the usual nail layout. These are the common choices in Hong Kong. The stabilising force still has to be proved on the critical section."
            },
            {
              kind: "table",
              headers: ["Item", "Geoguide 7 section 5.6.3"],
              rows: [
                ["Bar diameter", "25 mm, 32 mm, or 40 mm high-yield deformed bar. Use a smaller bar with caution on a long nail, because it bends during installation."],
                ["Length", "Treat a nail longer than 20 m with caution. A long nail needs more ground movement to mobilise its full capacity."],
                ["Spacing", "1.5 m to 2.0 m. Stagger the horizontal rows."],
                ["Inclination", "Usually 5° to 20° below the horizontal, so the grout can be placed under gravity or low pressure. A steeper nail mobilises less tension. If the nail is steep, check tension, shear, and bending together."]
              ]
            },
            {
              kind: "prose",
              text: "Geoguide 7 Table 5.6 sets the minimum factor against internal failure of a nail. Tensile failure of the bar is 1.5. Pullout at the soil-grout interface is 1.5 for a transient load in weathered granite or volcanic rock, and 2.0 for a sustained load or for a transient load in other soils. Pullout at the grout-reinforcement interface is 2.0. Where a presumed rock-grout bond of 0.35 MPa is used, section 5.6.3 recommends a rock socket of at least 2 m into PW90/100 or better rock."
            },
            {
              kind: "links",
              items: [
                { label: "Geoguide 7, section 5.6.3, nail layout and capacity", href: "https://www.cedd.gov.hk/filemanager/eng/content_117/eg7_2023.11.21.pdf" },
                { label: "Geoguide 7, Table 5.6, internal failure of a nail", href: "https://www.cedd.gov.hk/filemanager/eng/content_117/eg7_2023.11.21.pdf" },
                { label: "Geoguide 7, Table 5.7 and Figures 5.4 and 5.5, nail heads", href: "https://www.cedd.gov.hk/filemanager/eng/content_117/eg7_2023.11.21.pdf" }
              ]
            },
            {
              kind: "prose",
              text: "Impact assessments cover the following."
            },
            {
              kind: "list",
              items: [
                "DSD pipes / reserve zones (no adverse comment required).",
                "Elevated road structures (HyD).",
                "Waterworks reserve (WSD).",
                "Existing soil nails (identify damaged nails and compensate if necessary)."
              ]
            }
          ]
        },
        {
          id: "slope-durability",
          title: "3.3 Design for durability",
          blocks: [
            {
              kind: "prose",
              text: "Geoguide 7 section 5.5. The soil-nailed system has to stay stable and serviceable in the corrosive environment that exists now and the one that is expected. Steel reinforcement needs corrosion protection. Hong Kong practice uses three classes. Class 1 is hot-dip galvanising with a minimum zinc coating of 610 g/m² to BS EN ISO 1461:2009, plus corrugated plastic sheathing to the General Specification for Civil Engineering Works. Class 2 is the same galvanising plus a 2 mm sacrificial thickness on the radius of the bar. Class 3 is the galvanising alone. The class depends on soil aggressivity, the loading, and the design life. Section 4.3 classifies the aggressivity. Table 5.1 below is for nails that carry transient loads. Figure 5.3 shows a typical Class 1 detail. The plate is not redrawn here."
            },
            {
              kind: "prose",
              text: "Geoguide 7 Table 5.1. Recommended corrosion protection for soil nails carrying transient loads. Class 1 applies to highly aggressive and aggressive ground for a design life up to 120 years. Class 2 applies to mildly aggressive and non-aggressive ground for the same life. A design life up to 2 years uses Class 3 in every aggressivity class."
            },
            {
              kind: "table",
              headers: ["Design life", "Highly aggressive", "Aggressive", "Mildly aggressive", "Non-aggressive"],
              rows: [
                ["Up to 120 years", "Class 1", "Class 1", "Class 2", "Class 2"],
                ["Up to 2 years", "Class 3", "Class 3", "Class 3", "Class 3"]
              ]
            },
            {
              kind: "list",
              items: [
                "For a potentially aggressive site with no aggressivity assessment, use Class 1 where the design life is more than 2 years.",
                "A design life up to 2 years does not need an aggressivity assessment.",
                "A nail that carries a sustained load needs more protection than Table 5.1. That guidance is in Geoguide 7 section 5.12.2.",
                "Another measure may be used if it protects at least as well as Table 5.1. Consider its reliability and long-term performance, its effect on bond at the grout-reinforcement interface, cost, availability, and handling and quality control on site."
              ]
            },
            {
              kind: "links",
              items: [
                { label: "Geoguide 7, section 5.5 and Table 5.1, durability", href: "https://www.cedd.gov.hk/filemanager/eng/content_117/eg7_2023.11.21.pdf" },
                { label: "Geoguide 7, Figure 5.3, Class 1 corrosion protection", href: "https://www.cedd.gov.hk/filemanager/eng/content_117/eg7_2023.11.21.pdf" }
              ]
            }
          ]
        },
        {
          id: "slope-stability",
          title: "3.4 Stability analysis requirements",
          blocks: [{
            kind: "list",
            items: [
              "Software: SLOPE/W or equivalent (Morgenstern-Price or Spencer method preferred).",
              "Search for critical slip surfaces (circular and non-circular).",
              "Consider both global and local (nail-head) failure modes.",
              "Sensitivity checks on water table and strength parameters."
            ]
          }]
        },
        {
          id: "slope-construction",
          title: "3.5 Construction and monitoring",
          blocks: [{
            kind: "list",
            items: [
              "Installation sequence that maintains temporary stability.",
              "Pull-out tests on sacrificial nails.",
              "As-built survey of nail positions and tip levels.",
              "Long-term monitoring of groundwater and slope movement (standpipes, inclinometers, settlement markers).",
              "AAA levels and contingency measures."
            ]
          }]
        },
        {
          id: "slope-deliverables",
          title: "3.6 Deliverables",
          blocks: [{
            kind: "list",
            items: [
              "Geotechnical report with a clear statement of changes from previous submissions.",
              "Stability calculation packages for each critical section (existing and permanent).",
              "Soil-nail schedule and notes.",
              "Drainage design calculations.",
              "Impact assessment reports and correspondence with DSD / HyD / WSD / GEO.",
              "Monitoring plan and drawings."
            ]
          }]
        }
      ]
    }
  ],
  goodPractice: {
    id: "good-practice",
    title: "General good practice notes",
    items: [
      "Always start with the desk study. Do not jump straight to numerical modelling.",
      "Use the most conservative yet realistic parameters justified by site-specific data.",
      "Document every assumption and the source of every parameter.",
      "Highlight all changes from previous submissions (yellow highlighting is standard in ICU amendments).",
      "Obtain “no adverse comment” letters from relevant departments (DSD, HyD, WSD, GEO) before finalising the submission.",
      "Prepare clear, self-contained calculation packages that a checker can review without referring back to the main text.",
      "Design for constructability and long-term maintenance from the outset.",
      "Keep the geological model consistent across all analyses (ELS, slope stability, settlement)."
    ]
  }
};
