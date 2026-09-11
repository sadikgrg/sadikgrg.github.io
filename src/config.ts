import nycDashboardPoster from "./assets/nyc-citi-bike-dashboard-poster.jpg";
import nycDashboardVideo from "./assets/nyc-citi-bike-dashboard.mp4";
import permitsOverview from "./assets/edmonton-permits-overview.png";
import permitsDetails from "./assets/edmonton-permits-details.png";
import rentalGamResults from "./assets/canadian-rental-gam-results.png";
import rentalReport from "./assets/canadian-rental-price-prediction.pdf?url";

export const siteConfig = {
  name: "Sadik Gurung",
  title: "Stat & CS Student",
  description: "Portfolio website of Sadik Gurung",
  accentColor: "#1d4ed8",
  social: {
    email: "sadikgrg@gmail.com",
    linkedin: "https://www.linkedin.com/in/sadikgrg/",
    github: "https://github.com/sadikgrg",
  },
  aboutMe:
    "I am a 4th year Stat and CS student at the University of Alberta graduating in Apr, 2027. I specialize in statistical data analysis and data science/machine learning. I use Python, R and SQL to clean and explore data, build reliable models, create visualizations that are useful and nice to look at. My projects and interests span regressions, classifications, data analysis and building interactive dashboards. I enjoy diving deep into the data to turn it into something cool and insightful. Outside of school and data, I love fishing, camping and spending time in the beautiful outdoors.",

skills: [
  "Python",
  "R",
  "SQL",
  "PostgreSQL",
  "Power BI",
  "Streamlit",
  "Machine Learning",
  "Statistical Modeling",
  "Data Visualization",
  "Git & GitHub"
],
  projects: [
    {
      name: "NYC Citi Bike Flow Forecasting",
      description:
        "Built an end-to-end forecasting pipeline from 2.4 million neighborhood-hour observations across 126 NYC neighborhoods. Trained Poisson XGBoost models with time-based validation and developed a Streamlit interactive dashboard for seven-day forecasts, demand trends, and bike rebalancing insights.",
      link: "https://github.com/sadikgrg/nyc-citi-bike-flow-forecasting",
      video: {
        src: nycDashboardVideo,
        poster: nycDashboardPoster.src,
        title: "NYC Citi Bike forecasting dashboard demonstration",
      },
      skills: ["Python", "PostgreSQL", "Streamlit"],
    },

    {
      name: "Edmonton Building Permits Analytics Dashboard",
      description:
        "Built an interactive Power BI dashboard to analyze Edmonton building permits from 2009 to 2025. Created metrics for permit count, construction value, average value, and year-over-year change, with detailed breakdowns by job category, building type, and work type.",
      link: "https://github.com/sadikgrg/Edmonton-Permit-Analytics",
      screenshots: [
        {
          src: permitsOverview,
          alt: "Overview page of the Edmonton Building Permits dashboard",
          caption: "Dashboard overview",
        },
        {
          src: permitsDetails,
          alt: "Permit Details and Breakdown page of the Edmonton Building Permits dashboard",
          caption: "Permit details and breakdown",
        },
      ],
      skills: ["Power BI", "Data Analytics", "Data Visualization"],
    },
    {
      name: "Canadian Rental Price Prediction",
      description:
        "Developed a generalized additive rent prediction model in R designed to generalize to unseen Canadian cities. More than 90% of test predictions fell within 30% of actual rent, with performance evaluated using MAE, RMSE, MAPE, and diagnostic plots.",
      link: "https://github.com/sadikgrg/Canadian-Rental-Price-Prediction",
      screenshots: [
        {
          src: rentalGamResults,
          alt: "Actual versus predicted Canadian rental prices from the GAM model",
          caption: "GAM predictions compared with actual rental prices",
        },
      ],
      report: {
        src: rentalReport,
        label: "Read full analysis (PDF)",
      },
      skills: ["R", "GAM", "Predictive Modelling", "Model Evaluation"],
    },
  ],
  experience: [
    {
      company: "Canadian Armed Forces Reserve",
      title: "Private, Human Resources Administrator",
      dateRange: "August 2024 - June 2026",
      bullets: [
        "Administered pay and allowances while ensuring accuracy in automated payroll systems.",
        "Audited and maintained personnel records to identify missing, inconsistent, or inaccurate information and support data integrity and compliance.",
        "Used automated pay systems and information management tools to support efficient HR operations.",
      ],
    },
  ],
  education: [
    {
      school: "University of Alberta",
      degree: "Bachelor of Science, Major in Statistics, Minor in Computer Science",
      dateRange: "Expected Graduation: Apr, 2027",
      achievements: [
        "Courseworks: Applied Regression, Time Series Analysis, Applied Statistical Methods for Data Analysis, Computing for Data Science, Machine Learning & Data Mining, Data Structures & Algorithms, Geographical Information System.",

      ],
    },
  ],
};
