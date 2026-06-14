function School() {
  const programs = [
    {
      name: "Advanced Cosmetology",
      hours: "1500 Hour Course + 300 Advanced Hours",
      kit: "$950",
      tuition: "$11,050",
      total: "$12,000",
      details: ["1500 Hour Tuition: $8,900", "300 Hour Tuition: $2,150"],
    },
    {
      name: "Cosmetology",
      hours: "1500 Hour Course",
      kit: "$950",
      tuition: "$8,900",
      total: "$9,850",
    },
    {
      name: "Esthetics",
      hours: "600 Hour Course",
      kit: "$700",
      tuition: "$6,300",
      total: "$7,000",
    },
    {
      name: "Advanced Manicuring",
      hours: "300 Hour Course",
      kit: "$800",
      tuition: "$3,200",
      total: "$4,000",
    },
    {
      name: "Manicuring",
      hours: "200 Hour Course",
      kit: "$800",
      tuition: "$2,200",
      total: "$3,000",
    },
  ];

  return (
    <section className="page-section school-page">
      <p className="eyebrow">The School</p>

      <h1 className="school-heading">
        Beauty Training with <span>Real Experience</span>
      </h1>

      <p className="page-intro">
        Class Act School of Cosmetology offers cosmetology, advanced
        cosmetology, manicuring, advanced manicuring, and esthetics classes with
        hands-on training and job placement support.
      </p>

      <section className="tuition-section">
        <div className="section-heading">
          <p className="eyebrow">Course Costs</p>
          <h2>Programs & Tuition</h2>
          <p>
            Review current program costs, including tuition, student kit, books,
            and supply fees.
          </p>
        </div>

        <div className="tuition-grid">
          {programs.map((program) => (
            <article className="tuition-card" key={program.name}>
              <div>
                <p className="program-hours">{program.hours}</p>
                <h3>{program.name}</h3>
              </div>

              <div className="cost-list">
                <div>
                  <span>Student Kit, Books & Supplies</span>
                  <strong>{program.kit}</strong>
                </div>

                {program.details?.map((detail) => (
                  <p className="program-detail" key={detail}>
                    {detail}
                  </p>
                ))}

                <div>
                  <span>Tuition</span>
                  <strong>{program.tuition}</strong>
                </div>
              </div>

              <div className="total-cost">
                <span>Total Cost</span>
                <strong>{program.total}</strong>
              </div>
            </article>
          ))}
        </div>

        <div className="fees-card">
          <h3>Additional Fees</h3>
          <div>
            <span>Transfer or Re-Enrollment Fee</span>
            <strong>$175</strong>
          </div>
          <div>
            <span>Withdrawal Fee</span>
            <strong>$150</strong>
          </div>
          <div>
            <span>Course Transfer Fee</span>
            <strong>$350</strong>
          </div>
        </div>
      </section>

      <div className="school-form-wrapper">
        <div className="form-intro">
          <p className="eyebrow">Request Information</p>
          <h2>Interested in classes?</h2>
          <p>
            Fill out the form and someone from Class Act will reach out with
            more information about programs, start dates, and next steps.
          </p>
        </div>

        <form
          className="school-form"
          action="https://formspree.io/f/mojzebed"
          method="POST"
        >
          <div className="form-row">
            <label>
              Full Name
              <input type="text" name="name" required />
            </label>

            <label>
              Email Address
              <input type="email" name="email" required />
            </label>
          </div>

          <div className="form-row">
            <label>
              Phone Number
              <input type="tel" name="phone" />
            </label>

            <label>
              Program Interest
              <select name="program" required>
                <option value="">Select a program</option>
                <option value="Cosmetology">Cosmetology</option>
                <option value="Advanced Cosmetology">
                  Advanced Cosmetology
                </option>
                <option value="Manicuring">Manicuring</option>
                <option value="Advanced Manicuring">
                  Advanced Manicuring
                </option>
                <option value="Esthetics">Esthetics</option>
              </select>
            </label>
          </div>

          <label>
            Message
            <textarea
              name="message"
              rows="5"
              placeholder="Tell us what you're interested in..."
            ></textarea>
          </label>

          <button type="submit">Request Information</button>
        </form>
      </div>
    </section>
  );
}

export default School;